FROM node:20-alpine AS builder
WORKDIR /app

# prebuild runs `python scripts/generate-favicons.py` (Pillow); Alpine image has no Python by default
RUN apk add --no-cache python3 py3-pillow \
  && ln -sf python3 /usr/bin/python

COPY opus/package.json opus/package-lock.json ./
RUN npm ci

COPY opus/ .

# NEXT_PUBLIC_ vars are inlined at build time — must be declared as ARG so
# Railway (or any Docker host) can pass them in during `docker build`.
ARG NEXT_PUBLIC_TURNSTILE_SITE_KEY
ENV NEXT_PUBLIC_TURNSTILE_SITE_KEY=$NEXT_PUBLIC_TURNSTILE_SITE_KEY

RUN npm run build

# ---- runner ----
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Railway injects PORT at runtime; next start honours it automatically.
EXPOSE 3000

CMD ["npm", "run", "start"]
