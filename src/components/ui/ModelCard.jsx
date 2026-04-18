import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './ModelCard.css'

export default function ModelCard({ model, eager = false }) {
  return (
    <Link to={`/models/${model.slug}`} className="model-card" aria-label={`${model.name} — ${model.type}`}>
      <div className="model-card__media">
        <img
          src={model.heroImage}
          alt={`${model.name} — ${model.type} caravan`}
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
          {model.highlights.map((h) => (
            <span key={h} className="model-card__highlight">{h}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}
