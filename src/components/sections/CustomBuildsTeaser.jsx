import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import CTAButton from '../ui/CTAButton.jsx'
import { customBuilds } from '../../content/customBuilds.js'
import './CustomBuildsTeaser.css'

export default function CustomBuildsTeaser() {
  const { eyebrow, heading, body, gallery, card } = customBuilds
  const thumbs = gallery.slice(0, 3)

  return (
    <section className="custom-teaser section" id="custom-builds-teaser">
      <div className="container custom-teaser__inner">
        <RevealOnScroll className="custom-teaser__hero">
          <img
            src={card.heroImage}
            alt="Sahara Caravans custom van build"
            loading="lazy"
          />
        </RevealOnScroll>

        <div className="custom-teaser__content">
          <RevealOnScroll>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-label">{heading}</h2>
            <p className="custom-teaser__body">{body[0]}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="custom-teaser__thumbs">
              {thumbs.map((img) => (
                <div key={img.src} className="custom-teaser__thumb">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <CTAButton to="/custom-builds">See custom builds</CTAButton>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
