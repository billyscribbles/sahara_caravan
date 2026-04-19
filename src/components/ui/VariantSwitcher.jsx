import { useRef } from 'react'
import './VariantSwitcher.css'

export default function VariantSwitcher({ variants, activeKey, onChange, label = 'Choose a layout' }) {
  const refs = useRef([])

  if (!variants?.length) return null

  const focusAt = (idx) => {
    const el = refs.current[idx]
    if (el) el.focus()
  }

  const handleKeyDown = (event, idx) => {
    const last = variants.length - 1
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown': {
        event.preventDefault()
        const next = idx === last ? 0 : idx + 1
        onChange(variants[next].key)
        focusAt(next)
        break
      }
      case 'ArrowLeft':
      case 'ArrowUp': {
        event.preventDefault()
        const prev = idx === 0 ? last : idx - 1
        onChange(variants[prev].key)
        focusAt(prev)
        break
      }
      case 'Home': {
        event.preventDefault()
        onChange(variants[0].key)
        focusAt(0)
        break
      }
      case 'End': {
        event.preventDefault()
        onChange(variants[last].key)
        focusAt(last)
        break
      }
      default:
        break
    }
  }

  return (
    <div className="variant-switcher">
      <span className="variant-switcher__eyebrow">{label}</span>
      <div className="variant-switcher__grid" role="radiogroup" aria-label={label}>
        {variants.map((variant, idx) => {
          const active = variant.key === activeKey
          return (
            <button
              key={variant.key}
              ref={(el) => (refs.current[idx] = el)}
              type="button"
              role="radio"
              aria-checked={active}
              tabIndex={active ? 0 : -1}
              className={`variant-switcher__option${active ? ' is-active' : ''}`}
              onClick={() => onChange(variant.key)}
              onKeyDown={(event) => handleKeyDown(event, idx)}
            >
              <span className="variant-switcher__blueprint" aria-hidden="true">
                <img src={variant.blueprint} alt="" loading="lazy" />
              </span>
              <span className="variant-switcher__meta">
                <span className="variant-switcher__badge">{variant.badge}</span>
                <span className="variant-switcher__label">{variant.label}</span>
                <span className="variant-switcher__blurb">{variant.blurb}</span>
              </span>
              <span className="variant-switcher__indicator" aria-hidden="true" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
