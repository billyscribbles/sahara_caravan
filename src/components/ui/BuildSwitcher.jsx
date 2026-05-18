import './BuildSwitcher.css'

// The Standard / Slide-Out switcher — two wide horizontal cards on a dark
// section. A card flagged `available: false` renders disabled with a
// "Coming soon" badge and cannot be selected. The badge sits on the image.
export default function BuildSwitcher({ builds, value, onChange }) {
  if (!builds?.length) return null
  return (
    <div className="build-switcher" role="group" aria-label="Choose your build">
      {builds.map((b) => {
        const disabled = b.available === false
        const active = b.key === value
        const badge = disabled ? 'Coming soon' : b.badge
        return (
          <button
            key={b.key}
            type="button"
            disabled={disabled}
            aria-pressed={active}
            className={`build-switcher__card${active ? ' is-active' : ''}${
              disabled ? ' is-disabled' : ''
            }`}
            onClick={() => {
              if (!disabled) onChange(b.key)
            }}
          >
            <span className="build-switcher__figure">
              <img src={b.blueprint} alt="" loading="lazy" />
              {badge && <span className="build-switcher__badge">{badge}</span>}
            </span>
            <span className="build-switcher__body">
              <span className="build-switcher__name">{b.label}</span>
              <span className="build-switcher__blurb">{b.blurb}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
