import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter: max 3 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY ?? "",
      response: token,
      remoteip: ip,
    }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  // Prefer Cloudflare's header; fall back to x-forwarded-for
  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message, turnstileToken } = body as Record<string, unknown>;

  // Presence checks
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim() ||
    typeof subject !== "string" || !subject.trim() ||
    typeof message !== "string" || !message.trim() ||
    typeof turnstileToken !== "string" || !turnstileToken
  ) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  // Length limits
  if (name.length > 100 || email.length > 254 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input too long" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Verify Turnstile server-side (never trust client)
  const tokenValid = await verifyTurnstile(turnstileToken, ip);
  if (!tokenValid) {
    return NextResponse.json({ error: "Bot verification failed" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? "contact@example.com",
    to: "rmckinley@rmckinley.net",
    replyTo: email,
    subject: `SITE INBOUND - ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
