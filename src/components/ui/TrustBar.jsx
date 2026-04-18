import { Check } from 'lucide-react'
import './TrustBar.css'

export default function TrustBar({ items, tone = 'light' }) {
  if (!items?.length) return null
  return (
    <div className={`trust-bar trust-bar--${tone}`}>
      {items.map((item) => (
        <span key={item} className="trust-bar__item">
          <Check size={14} strokeWidth={2.5} className="trust-bar__icon" aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  )
}
