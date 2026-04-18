import { Quote } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import SectionHeader from '../ui/SectionHeader.jsx'
import { testimonials } from '../../content/testimonials.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials section section--alt" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow={testimonials.eyebrow}
          heading={testimonials.heading}
          align="center"
        />
        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.08}>
              <figure className="testimonial">
                <Quote size={28} strokeWidth={1.6} className="testimonial__mark" aria-hidden="true" />
                <blockquote className="testimonial__quote">{t.quote}</blockquote>
                <figcaption className="testimonial__caption">
                  <span className="testimonial__name">{t.name}</span>
                  <span className="testimonial__meta">{t.location} · {t.model}</span>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
