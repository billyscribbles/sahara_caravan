import SectionHeader from '../ui/SectionHeader.jsx'
import './BrandWheel.css'

const partners = [
  { name: 'ARV', src: '/images/partners/arv.png' },
  { name: 'Coast', src: '/images/partners/coast.png' },
  { name: 'Dometic', src: '/images/partners/dometic.png' },
  { name: 'Leaktight', src: '/images/partners/leaktight.png' },
  { name: 'NCE', src: '/images/partners/nce.png' },
  { name: 'Probond', src: '/images/partners/probond.png' },
  { name: 'Thetford', src: '/images/partners/thetford.png' },
]

export default function BrandWheel() {
  return (
    <section className="brand-wheel section section--alt" id="partners">
      <div className="container">
        <SectionHeader
          eyebrow="Trusted Components"
          heading="Built with the best in the business."
          sub="Every Sahara caravan is assembled with components from manufacturers we trust to last the long road."
          align="center"
        />
      </div>

      <div className="brand-wheel__marquee" aria-label="Our supplier partners">
        <div className="brand-wheel__track">
          <ul className="brand-wheel__row">
            {partners.map((p) => (
              <li key={p.name} className="brand-wheel__item">
                <img src={p.src} alt={`${p.name} logo`} className="brand-wheel__logo" loading="lazy" />
              </li>
            ))}
          </ul>
          <ul className="brand-wheel__row" aria-hidden="true">
            {partners.map((p) => (
              <li key={`${p.name}-dup`} className="brand-wheel__item">
                <img src={p.src} alt="" className="brand-wheel__logo" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
