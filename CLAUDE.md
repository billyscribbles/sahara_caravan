# Sahara Caravans — Project Conventions for Claude

Marketing site for Sahara Caravans (React + Vite, deployed as a static site).
Theme is a premium bone-on-black palette with real product photography.

## Changelog

- Always update `CHANGELOG.md` for any large functional or UI changes.
- Style: plain English for a non-technical reader (imagine the client, who runs the caravan business — not a developer). One bullet per change. No dates, no headings, no version numbers, no jargon ("scaffolding", "edge function", "RPC", "hue", "token", "migration"). Describe what the user can now see or do, not how it was built. Keep each line under ~25 words.
- Append new bullets to the existing list. Don't reorganise or remove past entries unless asked.
- Stage the `CHANGELOG.md` update in the same commit as the change it describes.

## Source-of-truth files

- `src/config/site.config.js` — brand info, nav, footer, SEO, contact
- `src/config/theme.config.js` — colors, fonts, radii, shadows
- `public/brand/` — logos (`logo.png` for light bg, `logo-light.png` for dark bg)
- `CHANGELOG.md` — client-facing update log (not on the site)
