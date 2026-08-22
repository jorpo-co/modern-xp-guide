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

## Structure

- `content/` - Markdown pages for each practice area.
- `assets/` - CSS source (processed by PostCSS).
- `static/` - Images, compiled CSS, favicons, robots.txt.
- `themes/epaper/` - Custom Hugo theme with layouts and partials.
- `hugo.toml` - Site configuration.

## What it is not

This is not a theme you can reuse. The custom theme is specific to this content. If you want the practices themselves, look at the skills and prompts in the parent project.

## License

CC BY-SA 4.0. See [LICENSE](LICENSE) for details.