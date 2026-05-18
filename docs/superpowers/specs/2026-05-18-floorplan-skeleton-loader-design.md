# Floor Plan Skeleton Loader — Design

## Problem

On a model page, the "See the layout" section renders the floor plan (blueprint)
as a plain `<img>`. When a visitor picks a different size in the configurator,
`currentFloorPlan` recomputes and the `<img>`'s `src` swaps — but there is no
loading state. The browser keeps showing the *previous* blueprint until the new
one decodes, then it pops in. There is no indication the displayed blueprint may
not match the currently selected size.

## Goal

When the visitor selects a different size, show a skeleton loader in the floor
plan area until the correct blueprint for that selection has loaded, then fade
the blueprint in.

## Approach

Track the new image's load state and reveal a skeleton **only if loading is
still in progress after a 150ms delay**. Blueprints already in the browser
cache load near-instantly, so a delay prevents a jarring skeleton flash when a
visitor revisits a size. Genuinely slow or first-time loads get the skeleton.

Rejected alternatives:
- Skeleton on every size change — flickers for cached blueprints.
- Preload via `new Image()` then swap — more moving parts than needed (YAGNI).

## Component

New self-contained component `FloorPlanImage` that owns all loading-state logic.

**Location:** `src/components/ui/FloorPlanImage.jsx` + `FloorPlanImage.css`

**Props:**
- `src` — blueprint image URL, or `null` when no plan exists.
- `alt` — image alt text.

**Behaviour:**
- `src` changes → set `loaded = false`, start a 150ms timer.
- Image `onLoad` → set `loaded = true`, cancel the timer, fade the blueprint in.
- Timer fires while still loading → render the pulsing skeleton.
- Image `onError` → render the existing "Floor plan coming soon." dashed box.
- `src` is `null` → render the existing dashed placeholder unchanged.

**Skeleton style:** a solid bone-toned rectangle that gently pulses opacity
(no shimmer sweep), matching the premium bone-on-black palette.

**Layout:** the skeleton occupies a fixed-aspect-ratio box (~16:7, wide, to
match typical blueprint proportions) so the page does not jump when the
skeleton appears or the image loads. The real image fades in over the box on
load. Styling must work at 320px, 375px, 768px, and 1440px with no horizontal
scroll, using fluid sizing.

## Data flow

```
size pill clicked
  -> ModelConfigurator.onChange({ size })
  -> ModelPage.applySelection -> selection state update
  -> getFloorPlan(...) -> currentFloorPlan (new src)
  -> <FloorPlanImage src={currentFloorPlan} />
       src prop changed -> loaded=false, start 150ms timer
       timer fires & still loading -> skeleton visible
       img onLoad -> loaded=true, skeleton hidden, image fades in
```

## Files touched

- **New:** `src/components/ui/FloorPlanImage.jsx`
- **New:** `src/components/ui/FloorPlanImage.css`
- **Edit:** `src/pages/ModelPage.jsx` — replace the `<img>`/placeholder block
  (lines 293–302) with `<FloorPlanImage src={currentFloorPlan} alt={...} />`.
- **Edit:** `src/pages/ModelPage.css` — the existing `model-page__floorplan-img`
  and `model-page__floorplan-placeholder` rules may move into the new component
  CSS or be referenced; keep the placeholder visuals identical.
- **Edit:** `CHANGELOG.md` — one client-facing bullet.

## Testing / verification

- Switch sizes on a model page; confirm the skeleton appears for an
  uncached blueprint and the correct blueprint fades in once loaded.
- Revisit a previously loaded size; confirm no skeleton flash.
- Select a size with no floor plan; confirm the "Floor plan coming soon."
  dashed box still shows.
- Simulate a broken image URL; confirm it falls back to the dashed box.
- Verify layout at 320px, 375px, 768px, 1440px with no horizontal scroll.

## Out of scope

- Preloading adjacent sizes' blueprints.
- Storing per-blueprint aspect ratios in `models.js`.
