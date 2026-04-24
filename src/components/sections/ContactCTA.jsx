import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import './ContactCTA.css'

export default function ContactCTA({
  eyebrow = 'Get in touch',
  heading = 'Start a conversation.',
  sub = "Tell us a little about you and we'll be in touch within one business day.",
  primaryLabel = 'Get in touch',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  tone = 'dark',
}) {
  const toneClass = tone === 'alt' ? 'section--alt' : tone === 'light' ? '' : 'section--dark'

  return (
    <section className={`contact-cta section ${toneClass}`.trim()}>
      <div className="container contact-cta__inner">
        <RevealOnScroll>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-label">{heading}</h2>
          <p className="section-sub">{sub}</p>
          <div className="contact-cta__actions">
            <Link to={primaryHref} className="contact-cta__primary">
              <span>{primaryLabel}</span>
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link to={secondaryHref} className="contact-cta__secondary">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
