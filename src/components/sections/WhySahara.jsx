import { Hammer, Mountain, LifeBuoy, BadgeCheck, Sparkles } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import { whySahara } from '../../content/whySahara.js'
import './WhySahara.css'

const ICONS = { Hammer, Mountain, LifeBuoy, BadgeCheck }

export default function WhySahara() {
  return (
    <section className="why section section--alt" id="why">
      <div className="container">
        <SectionHeader
          eyebrow={whySahara.eyebrow}
          heading={whySahara.heading}
          sub={whySahara.sub}
          align="center"
        />
        <div className="why__grid">
          {whySahara.pillars.map((pillar, i) => {
            const Icon = ICONS[pillar.icon] || Sparkles
            return (
              <RevealOnScroll key={pillar.title} delay={i * 0.06}>
                <article className="why__card">
                  <div className="why__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="why__title">{pillar.title}</h3>
                  <p className="why__body">{pillar.body}</p>
                </article>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
