import { useState, useEffect } from 'react'
import './FloorPlanImage.css'

// Delay before the skeleton appears. Long enough that blueprints already in
// the browser cache (which decode near-instantly) swap in without a skeleton
// flash; short enough that genuine waits still get a loader.
const SKELETON_DELAY_MS = 150

// Renders a caravan floor plan with a skeleton loader. When `src` changes
// (the visitor picks a different size), the skeleton shows until the new
// blueprint has loaded, then the blueprint fades in over it. A missing or
// broken blueprint falls back to the "Floor plan coming soon." placeholder.
export default function FloorPlanImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(false)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    if (!src) return undefined
    setLoaded(false)
    setErrored(false)
    setShowSkeleton(false)
    const timer = setTimeout(() => setShowSkeleton(true), SKELETON_DELAY_MS)
    return () => clearTimeout(timer)
  }, [src])

  if (!src || errored) {
    return <p className="floorplan-image__placeholder">Floor plan coming soon.</p>
  }

  // Catch blueprints already in the browser cache: a freshly-mounted <img>
  // (keyed on src) can finish loading before React attaches the onLoad
  // handler, so the load event would never be seen.
  const checkCached = (node) => {
    if (node && node.complete && node.naturalWidth > 0) setLoaded(true)
  }

  return (
    <div className="floorplan-image">
      {showSkeleton && !loaded && (
        <div className="floorplan-image__skeleton" aria-hidden="true" />
      )}
      <img
        key={src}
        ref={checkCached}
        src={src}
        alt={alt}
        className={`floorplan-image__img${loaded ? ' is-loaded' : ''}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  )
}
