import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { saharaWarranty } from '../../content/saharaWarranty.js'
import './SaharaWarranty.css'

function renderInline(text) {
  // Splits on **bold** segments and renders <strong> for emphasis.
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

export default function SaharaWarranty() {
  return (
    <section className="warranty section section--dark" id="sahara-warranty">
      <div className="container warranty__inner">
        <RevealOnScroll className="warranty__head">
          <span className="section-eyebrow">{saharaWarranty.eyebrow}</span>
          <h2 className="section-label">{saharaWarranty.heading}</h2>
        </RevealOnScroll>

        <div className="warranty__body">
          {saharaWarranty.body.map((para, i) => (
            <RevealOnScroll key={i} delay={0.05 * (i + 1)}>
              <p className="warranty__para">{renderInline(para)}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="warranty__badges">
            <img
              src={saharaWarranty.badgeImage}
              alt={saharaWarranty.badgeAlt}
              className="warranty__badges-img"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
