import RevealOnScroll from './RevealOnScroll.jsx'
import './SectionHeader.css'

export default function SectionHeader({ eyebrow, heading, sub, align = 'left', dark = false }) {
  return (
    <RevealOnScroll className={`section-header section-header--${align}${dark ? ' section-header--dark' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {heading && <h2 className="section-label">{heading}</h2>}
      {sub && <p className="section-sub">{sub}</p>}
    </RevealOnScroll>
  )
}
