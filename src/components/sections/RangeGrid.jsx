import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import ModelCard from '../ui/ModelCard.jsx'
import CTAButton from '../ui/CTAButton.jsx'
import { models } from '../../content/models.js'
import { customBuilds } from '../../content/customBuilds.js'
import './RangeGrid.css'

export default function RangeGrid({ showCta = true }) {
  return (
    <section className="range section" id="range">
      <div className="container">
        <SectionHeader
          eyebrow="The Range"
          heading="Four vans. And one bespoke fit-out."
          sub="From the sealed highway to the red dirt — and a custom motorhome build for those who want a home on wheels all their own."
          align="center"
        />
        <div className="range__grid">
          {models.map((model, i) => (
            <RevealOnScroll key={model.slug} delay={i * 0.06}>
              <ModelCard model={model} eager={i === 0} />
            </RevealOnScroll>
          ))}
          <RevealOnScroll key={customBuilds.card.slug} delay={models.length * 0.06}>
            <ModelCard model={customBuilds.card} />
          </RevealOnScroll>
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
