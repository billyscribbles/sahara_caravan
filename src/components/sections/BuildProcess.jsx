import {
  Factory,
  Box,
  Layers,
  Droplets,
  Zap,
  Hammer,
  Utensils,
  BadgeCheck,
  Sparkles,
} from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import { buildProcess } from '../../content/buildProcess.js'
import './BuildProcess.css'

const ICONS = { Factory, Box, Layers, Droplets, Zap, Hammer, Utensils, BadgeCheck }

export default function BuildProcess({ showHeader = true }) {
  return (
    <section className="build-process section section--dark" id="build-process">
      <div className="container">
        {showHeader && (
          <SectionHeader
            eyebrow={buildProcess.eyebrow}
            heading={buildProcess.heading}
            sub={buildProcess.sub}
            align="center"
            dark
          />
        )}
        <div className="build-process__grid">
          {buildProcess.stages.map((stage, i) => {
            const Icon = ICONS[stage.icon] || Sparkles
            const step = String(i + 1).padStart(2, '0')
            return (
              <RevealOnScroll key={stage.title} delay={i * 0.06}>
                <div className="build-process__stage">
                  <div className="build-process__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <div className="build-process__num">{step}</div>
                  <h3 className="build-process__title">{stage.title}</h3>
                  <p className="build-process__body">{stage.body}</p>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
        {buildProcess.footnote && (
          <p className="build-process__footnote">{buildProcess.footnote}</p>
        )}
      </div>
    </section>
  )
}
