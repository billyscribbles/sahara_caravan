# Image Manifest

All images currently shipped are **SVG placeholders**. Replace each slot with a real photograph (or styled illustration) at the listed path and dimensions. The site will pick them up with no code change. Keep filenames identical unless you also update the references.

## Priority key
- **P0** — visible above the fold on the homepage; replace first
- **P1** — visible on primary landing pages (model pages, range, about)
- **P2** — secondary / decorative

## Brand

| Path | Dimensions | Purpose | Priority |
|---|---|---|---|
| `public/brand/logo.svg` | 240×64 | Primary logo (navbar + footer) | P0 |
| `public/brand/logo-mark.svg` | 64×64 | Icon-only mark (favicon source) | P0 |
| `public/brand/favicon.svg` | 32×32 | Browser tab favicon | P0 |
| `public/brand/og-image.svg` | 1200×630 | Social share card | P0 |

## Homepage / shared

| Path | Dimensions | Purpose | Priority |
|---|---|---|---|
| `public/images/hero/hero-main.svg` | 1920×1080 | Full-bleed homepage hero | P0 |
| `public/images/heritage/workshop.svg` | 1200×900 | Heritage section image | P1 |
| `public/images/dealers/australia-map.svg` | 800×700 | Dealer teaser + /dealers map | P1 |

## Model imagery (4 models × 5 images)

For each model (`mirage`, `x-master`, `dune`, `horizon`):

| Path | Dimensions | Purpose | Priority |
|---|---|---|---|
| `public/images/models/<slug>/hero.svg` | 1600×900 | Model page hero + range card | P0 |
| `public/images/models/<slug>/gallery-1.svg` | 1200×800 | Model page gallery tile 1 | P1 |
| `public/images/models/<slug>/gallery-2.svg` | 1200×800 | Model page gallery tile 2 | P1 |
| `public/images/models/<slug>/gallery-3.svg` | 1200×800 | Model page gallery tile 3 | P1 |
| `public/images/models/<slug>/gallery-4.svg` | 1200×800 | Model page gallery tile 4 | P1 |

When swapping to photography, prefer JPEG at quality ~82 for hero / gallery (or WEBP for maximum compression). Keep aspect ratios close to the dimensions above to avoid layout shift.

## After replacing

1. Update file extensions in `src/content/models.js`, `src/content/hero.js`, `src/content/heritage.js` if swapping from `.svg` to `.jpg` / `.webp`.
2. Run `yarn build` and visually verify the homepage + each model page.
3. Re-check Lighthouse Performance — hero image LCP budget is 2.5 s.
