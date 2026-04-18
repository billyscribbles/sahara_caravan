import './SpecPill.css'

export default function SpecPill({ label, value, tone = 'default' }) {
  return (
    <div className={`spec-pill spec-pill--${tone}`}>
      <span className="spec-pill__label">{label}</span>
      <span className="spec-pill__value">{value}</span>
    </div>
  )
}
