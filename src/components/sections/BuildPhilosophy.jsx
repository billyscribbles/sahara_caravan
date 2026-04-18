import { Car, Wrench, Droplet, Home, Sparkles } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import { buildPhilosophy } from '../../content/buildPhilosophy.js'
import './BuildPhilosophy.css'

const ICONS = { Car, Wrench, Droplet, Home }

export default function BuildPhilosophy() {
  return (
    <section className="build section section--dark" id="build-philosophy">
      <div className="container">
        <SectionHeader
          eyebrow={buildPhilosophy.eyebrow}
          heading={buildPhilosophy.heading}
          sub={buildPhilosophy.sub}
          align="center"
          dark
        />
        <div className="build__grid">
          {buildPhilosophy.pillars.map((pillar, i) => {
            const Icon = ICONS[pillar.icon] || Sparkles
            return (
              <RevealOnScroll key={pillar.title} delay={i * 0.08}>
                <div className="build__pillar">
                  <div className="build__icon" aria-hidden="true">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>
                  <div className="build__pillar-num">0{i + 1}</div>
                  <h3 className="build__pillar-title">{pillar.title}</h3>
                  <p className="build__pillar-body">{pillar.body}</p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
