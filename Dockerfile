# syntax=docker/dockerfile:1

# ---- Stufe 1: Astro-Site bauen ----
FROM node:22-alpine AS build
WORKDIR /app

# Nur die Manifeste kopieren → npm-ci-Layer wird gecacht, solange sich
# die Dependencies nicht ändern.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Stufe 2: Statische Dateien mit nginx ausliefern ----
FROM nginx:1.27-alpine AS runtime

# Eigene nginx-Config (saubere URLs, gzip, Cache-Header)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nur das fertige Build-Ergebnis ins Image
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Einfacher Health-Check für Coolify
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
