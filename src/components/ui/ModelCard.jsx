import { Link } from 'react-router-dom'
import { ArrowRight, ShowerHead, WashingMachine, ChefHat, Sun, BedDouble } from 'lucide-react'
import './ModelCard.css'

function ToiletIcon({ size = 14, strokeWidth = 2 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 3h10v6H7z" />
      <path d="M6 9h12l-1.4 6a3 3 0 0 1-2.9 2.3h-2.9a3 3 0 0 1-2.9-2.3z" />
      <path d="M8 17.5v3" />
      <path d="M16 17.5v3" />
      <path d="M7 20.5h10" />
    </svg>
  )
}

const HIGHLIGHT_ICONS = {
  Toilet: ToiletIcon,
  Shower: ShowerHead,
  Laundry: WashingMachine,
  Kitchenette: ChefHat,
  'Off-Grid': Sun,
  Bunks: BedDouble,
}

export default function ModelCard({ model, eager = false }) {
  const to = model.href ?? `/models/${model.slug}`
  return (
    <Link to={to} className="model-card" aria-label={`${model.name} — ${model.type}`}>
      <div className="model-card__media">
        <img
          src={model.heroImage}
          alt={`${model.name} — ${model.type}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="model-card__type">{model.type}</span>
      </div>
      <div className="model-card__body">
        <div className="model-card__head">
          <h3 className="model-card__name">{model.name}</h3>
          <span className="model-card__arrow" aria-hidden="true">
            <ArrowRight size={18} strokeWidth={2} />
          </span>
        </div>
        <p className="model-card__tagline">{model.tagline}</p>
        <div className="model-card__highlights">
          {model.highlights.map((h) => {
            const Icon = HIGHLIGHT_ICONS[h]
            return (
              <span key={h} className="model-card__highlight">
                {Icon && <Icon size={14} strokeWidth={2} />}
                <span>{h}</span>
              </span>
            )
          })}
        </div>
      </div>
    </Link>
  )
}
