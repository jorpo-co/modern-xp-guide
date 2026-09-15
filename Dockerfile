# --- Base stage with Hugo and Go ---
FROM golang:1.27-alpine AS base
RUN apk add --no-cache git nodejs npm
RUN go install github.com/gohugoio/hugo@latest
RUN npm install -g pnpm

WORKDIR /src
ENV PATH="/src/node_modules/.bin:${PATH}"

COPY package.json pnpm-lock.yaml postcss.config.js ./
RUN pnpm install && \
    printf '#!/usr/bin/env node\nrequire("../postcss-cli/index.js")\n' > node_modules/.bin/postcss && \
    chmod +x node_modules/.bin/postcss
COPY . .

# --- Dev target: live reload ---
FROM base AS dev
EXPOSE 1313
CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL", "//modern-xp.jorpo.loco/", "--appendPort=false", "--disableFastRender", "--environment", "development"]

# --- Build stage: generate static files ---
FROM base AS build
RUN pnpm run build
