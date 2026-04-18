import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import ModelCard from '../ui/ModelCard.jsx'
import CTAButton from '../ui/CTAButton.jsx'
import { models } from '../../content/models.js'
import './RangeGrid.css'

export default function RangeGrid({ showCta = true }) {
  return (
    <section className="range section" id="range">
      <div className="container">
        <SectionHeader
          eyebrow="The Range"
          heading="Four vans. One standard of build."
          sub="From the sealed highway to the red dirt, there's a Sahara shaped to the way you travel."
          align="center"
        />
        <div className="range__grid">
          {models.map((model, i) => (
            <RevealOnScroll key={model.slug} delay={i * 0.06}>
              <ModelCard model={model} eager={i === 0} />
            </RevealOnScroll>
          ))}
        </div>
        {showCta && (
          <RevealOnScroll className="range__foot" delay={0.2}>
            <CTAButton to="/range" variant="secondary">See the full range</CTAButton>
          </RevealOnScroll>
        )}
      </div>
    </section>
  )
}
