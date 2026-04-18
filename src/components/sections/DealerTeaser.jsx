import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import CTAButton from '../ui/CTAButton.jsx'
import { dealers } from '../../content/dealers.js'
import './DealerTeaser.css'

export default function DealerTeaser() {
  return (
    <section className="dealer-teaser section section--dark" id="dealer-teaser">
      <div className="container dealer-teaser__inner">
        <RevealOnScroll className="dealer-teaser__map">
          <img src="/images/dealers/australia-map.svg" alt="Map of Australia showing Sahara Caravans dealer states" loading="lazy" />
        </RevealOnScroll>
        <div className="dealer-teaser__content">
          <RevealOnScroll>
            <span className="section-eyebrow">Dealer Network</span>
            <h2 className="section-label">Find your nearest dealer.</h2>
            <p className="dealer-teaser__body">
              Our partner network carries the full range across every state. See a van up close, talk through options with someone who knows them inside out, or reach out and we'll connect you directly.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="dealer-teaser__states">
              {dealers.states.map((s) => (
                <span key={s.code} className="dealer-teaser__state">{s.code}</span>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <CTAButton to="/dealers">Browse all dealers</CTAButton>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
