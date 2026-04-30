import { useState } from 'react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import Lightbox from '../ui/Lightbox.jsx'
import { customBuilds } from '../../content/customBuilds.js'
import './CustomBuilds.css'

export default function CustomBuilds() {
  const { eyebrow, heading, body, features, gallery } = customBuilds
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })
  const openLightbox = (images, index) => setLightbox({ open: true, images, index })
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }))

  return (
    <section className="custom-builds section" id="our-range">
      <div className="container custom-builds__inner">
        <div className="custom-builds__intro">
          <RevealOnScroll>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-label">{heading}</h2>
          </RevealOnScroll>

          {body.map((para, idx) => (
            <RevealOnScroll key={idx} delay={0.05 * (idx + 1)}>
              <p className="custom-builds__body">{para}</p>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={0.2}>
            <ul className="custom-builds__features">
              {features.map((f) => (
                <li key={f.title} className="custom-builds__feature">
                  <h3 className="custom-builds__feature-title">{f.title}</h3>
                  <p className="custom-builds__feature-body">{f.body}</p>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>

        <div className="custom-builds__gallery">
          {gallery.map((img, idx) => (
            <RevealOnScroll
              key={img.src}
              delay={0.04 * idx}
              className={`custom-builds__tile custom-builds__tile--${idx + 1}`}
            >
              <button
                type="button"
                className="custom-builds__tile-button"
                onClick={() => openLightbox(gallery, idx)}
                aria-label={`Open photo: ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightbox.open}
        images={lightbox.images}
        startIndex={lightbox.index}
        onClose={closeLightbox}
        alt="Custom build photo"
      />
    </section>
  )
}
