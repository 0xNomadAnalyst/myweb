# Service Dependencies

External services the site depends on, what each does, and which credentials/env vars are involved.

---

## Cloudflare

**Account required:** Yes (free tier sufficient)

### DNS & Proxy

The domain `rmckinley.net` is managed through Cloudflare. All DNS records live here. The orange-cloud proxy is active, meaning traffic passes through Cloudflare's edge before reaching Railway — providing CDN caching, DDoS mitigation, and IP masking for the origin server.

No env vars. Managed entirely through the Cloudflare dashboard.

### Turnstile (bot detection)

Cloudflare's CAPTCHA alternative, used on the homepage contact form. A widget renders client-side and silently verifies the visitor is human. On success it issues a short-lived token which is submitted with the form and verified server-side before any email is sent.

**Dashboard:** Cloudflare → Turnstile → `rmckinley-home-contact-form` widget

**Allowed hostnames** (must be kept in sync with wherever the site is served):

- `rmckinley.net` — production
- `localhost` — local dev

**Challenge type:** Managed (usually invisible to real users)

| Env var | Where used | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Client — identifies the widget | Public value, safe to expose. Must be available at **build time** (declared as `ARG` in Dockerfile). |
| `TURNSTILE_SECRET_KEY` | Server — verifies tokens with Cloudflare API | Secret. Runtime only. |

**Local dev:** Use Cloudflare's always-pass test keys to bypass hostname validation:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

### Email DNS records (for Resend)

Resend requires SPF, DKIM, and DMARC records to be added to the sending domain. These are managed as DNS records in Cloudflare for the `contact.rmckinley.net` subdomain. Without them, sent emails land in spam or are rejected outright.

No env vars. Set once in Cloudflare DNS, verified in the Resend dashboard.

---

## Resend

**Account required:** Yes (free tier: 3,000 emails/month, 100/day)

**Dashboard:** resend.com

Transactional email API used to deliver contact form submissions to `rmckinley@rmckinley.net`. Sending goes through Resend's infrastructure (not a shared SMTP IP pool), which protects deliverability. The `from` address is a verified domain sender; `replyTo` is set to the form submitter's address so replies go directly to them.

**Verified sending domain:** `contact.rmckinley.net` (DNS records in Cloudflare)

| Env var | Where used | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Server — authenticates with Resend API | Secret. Runtime only. Starts with `re_`. |
| `RESEND_FROM_EMAIL` | Server — `from` address on outbound emails | e.g. `info@contact.rmckinley.net`. Domain must be verified in Resend. |

---

## Railway

**Account required:** Yes

**Dashboard:** railway.app

Hosts and runs the Next.js application as a Docker container. The `Dockerfile` at the repo root builds the image; Railway detects it automatically and handles deployments on push.

**Important:** `NEXT_PUBLIC_` environment variables must be set in Railway as variables so they are forwarded as Docker build args during `docker build`. The `Dockerfile` declares them with `ARG` for this reason. Purely server-side vars (API keys, secret keys) are runtime-only and do not need the `ARG` treatment.

| Env var | Build-time or runtime | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | **Build-time** | Must be set before triggering a deploy |
| `TURNSTILE_SECRET_KEY` | Runtime | Injected at container start |
| `RESEND_API_KEY` | Runtime | Injected at container start |
| `RESEND_FROM_EMAIL` | Runtime | Injected at container start |
| `PORT` | Runtime | Injected automatically by Railway; Next.js picks it up |

---

## Summary

| Service | Feature used | Free tier |
| --- | --- | --- |
| Cloudflare | DNS, proxy, Turnstile bot detection, Resend DNS records | Yes |
| Resend | Transactional email delivery | Yes (3k/month) |
| Railway | Docker hosting & deploys | Paid (or trial) |
