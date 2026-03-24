# Contact Form — Dependencies & Security Design

## Overview

The homepage contact form (`/components/sections/contact.tsx`) submits to a Next.js API route (`/app/api/contact/route.ts`) that validates input, verifies a bot-detection token, and sends the message via a transactional email service. No email credentials are exposed to the client at any point.

---

## Dependencies

### 1. `@marsidev/react-turnstile`

**What it is:** A React wrapper for [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/), Cloudflare's CAPTCHA alternative.

**How it's used:**

The `<Turnstile>` component is rendered inside the form. When the page loads, Cloudflare's challenge script runs a passive browser analysis and — in "Managed" mode — typically resolves silently without any user interaction. On success it calls `onSuccess` with a short-lived token string, which the form stores in state and includes in the POST body as `turnstileToken`.

```tsx
<Turnstile
  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
  onSuccess={setTurnstileToken}
  options={{ theme: "dark" }}
/>
```

The site key (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`) is public — it is embedded in the page HTML and identifies which Cloudflare site the widget belongs to. It carries no privilege.

**Why Turnstile instead of reCAPTCHA or a honeypot:**

- **reCAPTCHA** sends browsing behaviour to Google and often requires the user to solve a puzzle. Turnstile is privacy-preserving and typically invisible to legitimate users.
- **Honeypot fields** (hidden inputs that bots fill in) are easily defeated by modern headless-browser spam tools that read the DOM and skip labelled hidden fields.
- **Turnstile + server-side verification** cannot be bypassed client-side. A bot that skips the widget gets no valid token and is rejected before any email is sent.
- The site is already behind Cloudflare, so the same account manages DNS, edge caching, and the Turnstile widget — no new vendor relationship needed.

---

### 2. `resend`

**What it is:** The official Node.js SDK for [Resend](https://resend.com), a transactional email API.

**How it's used:**

A single `Resend` instance is created server-side using the `RESEND_API_KEY` environment variable. On a validated submission, `resend.emails.send()` dispatches the message:

```ts
const { error } = await resend.emails.send({
  from: process.env.RESEND_FROM_EMAIL,   // verified domain address
  to:   "rmckinley@rmckinley.net",
  replyTo: email,                         // sender's address from form
  subject: `SITE INBOUND - ${subject}`,
  text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
});
```

The `from` address is a domain-verified sender (DNS records added to Cloudflare during setup). The `replyTo` is set to the submitter's email, so replying in any mail client goes directly to them.

**Why Resend instead of SMTP or mailto:**

- **Raw SMTP** (e.g. Nodemailer + Gmail) relies on the sending IP's reputation. A serverless host's shared IP pool is frequently on spam blocklists. Resend sends through its own warmed, monitored infrastructure.
- **`mailto:` links** expose the destination address in page source and require the visitor to have a mail client configured.
- Resend's domain verification (SPF, DKIM, DMARC records added via Cloudflare) tells receiving mail servers that the sending domain is authorised — reducing the probability that inbound messages land in spam.
- The free tier (3,000 emails/month, 100/day) is more than sufficient for a low-volume enquiry form.

---

## Server-Side Security Layers (`/app/api/contact/route.ts`)

The API route applies several independent checks in order. A request must pass all of them before an email is sent.

### Layer 1 — IP Rate Limiting

```ts
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
```

An in-memory `Map` tracks submission counts per IP address. Each IP is allowed 3 submissions per rolling hour window. Exceeding this returns HTTP 429 immediately, before any further processing.

The IP is read from `cf-connecting-ip` (the real client IP as reported by Cloudflare's proxy) with a fallback to `x-forwarded-for`. Because the site is proxied through Cloudflare, `cf-connecting-ip` is reliable and not spoofable by the client.

**Limitation:** In-memory state does not persist across serverless function cold starts or multiple instances. For the expected traffic volume this is acceptable. Cloudflare WAF rate-limiting rules can be added at the edge as a complementary layer if needed.

### Layer 2 — Input Validation

All fields are checked for:

- **Type and presence** — each must be a non-empty string.
- **Length caps** — name ≤ 100, email ≤ 254 (RFC 5321 maximum), subject ≤ 200, message ≤ 5,000 characters.
- **Email format** — a basic regex rejects clearly malformed addresses before reaching the email API.

These checks run before the Turnstile verification network call, so malformed requests are rejected cheaply.

### Layer 3 — Turnstile Server-Side Verification

```ts
await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
  method: "POST",
  body: new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: turnstileToken,
    remoteip: ip,
  }),
});
```

The token submitted by the client is sent to Cloudflare's verification endpoint along with the **secret key** (server-only, never exposed to the browser) and the submitter's IP. Cloudflare confirms the token is genuine, unexpired, and was issued to the correct site key. A cloned or replayed token is rejected.

This is the critical step that makes client-side bypass impossible: the secret key is required to verify, and only the server holds it.

---

## Environment Variables

| Variable | Where used | Visibility |
|---|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Client — identifies the Turnstile widget | Public (embedded in page) |
| `TURNSTILE_SECRET_KEY` | Server — verifies tokens with Cloudflare | Secret |
| `RESEND_API_KEY` | Server — authenticates with Resend API | Secret |
| `RESEND_FROM_EMAIL` | Server — `from` address on sent emails | Secret |

`NEXT_PUBLIC_` prefix is a Next.js convention that inlines the value into the client bundle. All other variables are server-only and never reach the browser.

---

## Request Flow Summary

```
Browser                     Next.js API Route              External
──────────────────────────────────────────────────────────────────
Form submit
  │
  ├─ Turnstile widget ──────────────────────────────────► Cloudflare
  │    resolves silently                                   issues token
  │    stores token in state ◄───────────────────────────
  │
  ├─ POST /api/contact
  │    { name, email, subject, message, turnstileToken }
  │
  │                          Rate limit check (in-memory)
  │                          Input validation
  │                          verifyTurnstile() ──────────► CF siteverify
  │                                          ◄────────────  { success: true }
  │                          resend.emails.send() ───────► Resend API
  │                                          ◄────────────  delivered
  │
  ◄─ { success: true }
  │
  Form shows confirmation
```
