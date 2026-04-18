# Sahara Caravans

Marketing site for Sahara Caravans — an Australian family-owned off-road caravan manufacturer based in Campbellfield, Victoria.

## Stack
- React 18 + Vite 5 (JSX)
- React Router v7 (lazy-loaded pages)
- Framer Motion (scroll reveals)
- Plain CSS with CSS custom properties
- Yarn 4.12 / Railway-ready

## Development

```sh
yarn install
yarn dev        # http://localhost:5173
yarn build
yarn preview
```

## Configuration

All client-specific values live in three layers:

1. `src/config/theme.config.js` — design tokens (colors, fonts, radii, shadows, transitions)
2. `src/config/site.config.js` — brand, nav, footer, contact, SEO, integrations
3. `src/content/*.js` — per-section copy (one file per section) + `models.js` for the caravan range

Components read from config/content files only — never hard-code strings or colours in components.

## Environment

Copy `.env.example` → `.env` and fill in:

- `VITE_FORMSPREE_ID` — Formspree form ID for the enquiry form (form works in demo mode without it)
- `VITE_SITE_URL` — canonical site URL (used in SEO tags)
- `VITE_GA_ID` — optional Google Analytics 4 measurement ID

## Assets

All images in `public/images/` are placeholder SVGs. Real photography slots are tracked in `IMAGE_MANIFEST.md` at the repo root — drop replacements with matching paths and the site picks them up automatically.

## Deploy

Railway picks up `railway.json` and runs `yarn start` after `yarn build`. For any other host: run `yarn build` and serve the `dist/` folder as a SPA with a catch-all to `index.html`.
