# --- Base stage with Hugo and Go ---
FROM golang:1.26-alpine AS base
RUN apk add --no-cache git nodejs npm
RUN go install github.com/gohugoio/hugo@latest
RUN npm install -g pnpm postcss-cli

WORKDIR /src

COPY package.json pnpm-lock.yaml postcss.config.js ./
RUN pnpm install

COPY . .

# --- Dev target: live reload ---
FROM base AS dev
EXPOSE 1313
CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL", "http://modern-xp.jorpo.loco/", "--appendPort=false", "--disableFastRender", "--environment", "development"]

# --- Build stage: generate static files ---
FROM base AS build
RUN pnpm run build

# --- Production target: serve with Nginx ---
FROM nginx:alpine AS prod
COPY --from=build /src/public /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
