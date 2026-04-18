# Image Manifest

Status legend:
- ✅ **Live photo** — pulled from saharacaravans.com.au
- 🧩 **Placeholder** — SVG placeholder still in place; replace with real photo before launch

## Priority key
- **P0** — visible above the fold on the homepage; replace first
- **P1** — visible on primary landing pages (model pages, range, about)
- **P2** — secondary / decorative

## Brand

| Path | Dimensions | Purpose | Priority | Status |
|---|---|---|---|---|
| `public/brand/logo.jpg` | 1080×294 | Original logo (dark on white) — kept for light backgrounds | P0 | ✅ |
| `public/brand/logo.png` | 1080×294 | Logo with transparent background (dark variant) | P0 | ✅ |
| `public/brand/logo-light.png` | 1080×294 | Logo with transparent background (white + gold) — used in navbar/footer | P0 | ✅ |
| `public/brand/favicon.png` | 192×192 | Browser tab favicon | P0 | ✅ |
| `public/brand/og-image.jpg` | Mirage header | Social share card | P0 | ✅ |
| `public/brand/logo.svg` | 240×64 | Unused legacy placeholder | — | 🧩 |
| `public/brand/logo-mark.svg` | 64×64 | Unused legacy placeholder | — | 🧩 |
| `public/brand/favicon.svg` | 32×32 | Unused legacy placeholder | — | 🧩 |
| `public/brand/og-image.svg` | 1200×630 | Unused legacy placeholder | — | 🧩 |

## Homepage / shared

| Path | Dimensions | Purpose | Priority | Status |
|---|---|---|---|---|
| `public/images/hero/hero-main.png` | 1920×1080-ish | Full-bleed homepage hero | P0 | ✅ |
| `public/images/heritage/workshop.png` | About photo | Heritage section image | P1 | ✅ |
| `public/images/dealers/australia-map.svg` | 1955×1795 viewBox | Dealer teaser map — outline adapted from Wikimedia Commons `File:Australia_states_blank.svg` (public domain), restyled for dark theme with dealer markers | P1 | ✅ |

## Model imagery

Each model has a hero + 4 gallery tiles. Mirage and Dune have real photos. X-Master and Horizon still use SVG placeholders because the live site doesn't publish those models.

| Model | Path pattern | Status |
|---|---|---|
| Mirage | `public/images/models/mirage/{hero,gallery-1..4}.png` | ✅ |
| Dune | `public/images/models/dune/{hero,gallery-1..4}.png` | ✅ |
| X-Master | `public/images/models/x-master/{hero,gallery-1..4}.svg` | 🧩 |
| Horizon | `public/images/models/horizon/{hero,gallery-1..4}.svg` | 🧩 |

Target dimensions (when replacing): hero 1600×900, gallery 1200×800. Prefer JPEG quality ~82 or WebP. Keep aspect ratios tight to avoid layout shift.

## Partner logos (not yet rendered)

Downloaded for future use in a Partners / Trusted Brands section. No UI wiring yet — `public/images/partners/` is not referenced from any component.

| Path | Source |
|---|---|
| `public/images/partners/arv.png` | ARV |
| `public/images/partners/coast.png` | Coast |
| `public/images/partners/dometic.png` | Dometic |
| `public/images/partners/nce.png` | NCE |
| `public/images/partners/probond.png` | Probond |
| `public/images/partners/thetford.png` | Thetford |
| `public/images/partners/leaktight.png` | Leaktight |

## After replacing further slots

1. Update file extensions in `src/content/models.js`, `src/content/hero.js`, `src/content/heritage.js` if swapping extensions.
2. Run `yarn build` and visually verify the homepage + each model page.
3. Re-check Lighthouse Performance — hero image LCP budget is 2.5 s.
