# Modern XP: A Field Guide

A Hugo website that publishes the Modern XP field guide. Content covers direction, features, stories, spikes, use cases, issues, chores, decision records, and other XP practices.

## Comments

Page comments are handled by [Giscus](https://giscus.app), which uses [GitHub Discussions](https://docs.github.com/en/discussions) on the [modern-xp-website](https://github.com/jorpo-co/modern-xp-website) repo. The Giscus widget loads in an iframe; the custom theme (`assets/css/giscus-theme.css`) maps our epaper design tokens to Primer CSS variables so the widget matches the site styling.

Comments can be disabled per-page by setting `comments: false` in the page's front matter (e.g. the privacy page).

## Build and run

```sh
cd guide
pnpm install
pnpm dev          # dev server with live CSS rebuild
pnpm build        # production build with minification
```

The dev server runs at `localhost:1313` by default.

### Docker dev (HTTPS via Traefik)

```sh
make certs        # generate mkcert certs for modernxp.loco
docker compose up
```

Then visit `https://modernxp.loco`. CSS rebuilds live via mounted volume.

## Structure

- `content/` - Markdown pages for each practice area.
- `assets/css/` - CSS source (processed by PostCSS).
- `static/` - Images, compiled CSS, favicons, robots.txt.
- `layouts/` - Project-level templates overriding the theme.
- `themes/epaper/` - Custom Hugo theme with layouts and partials.
- `config/` - Hugo configuration split by environment:
  - `config/_default/hugo.yaml` - Base config
  - `config/development/hugo.yaml` - Dev overrides (baseURL, etc.)
  - `config/production/hugo.yaml` - Prod overrides

### Content front matter conventions

| Field | Purpose |
|-------|---------|
| `meta.title` | Overrides `<title>` tag (optional) |
| `meta.description` | Page-specific meta description |
| `sitemap.priority` | Search priority (0.0–1.0) |
| `sitemap.disable` | Exclude from sitemap |
| `robots` | `noindex` to hide from search engines |
| `comments` | `false` to disable giscus on page |

## What it is not

This is not a theme you can reuse. The custom theme is specific to this content. If you want the practices themselves, look at the skills and prompts in the parent project.

## License

CC BY-SA 4.0. See [LICENSE](LICENSE) for details.