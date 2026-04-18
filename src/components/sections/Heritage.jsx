import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { heritage } from '../../content/heritage.js'
import './Heritage.css'

export default function Heritage() {
  return (
    <section className="heritage section" id="heritage">
      <div className="container heritage__inner">
        <div className="heritage__media">
          <RevealOnScroll className="heritage__image-wrap">
            <img src={heritage.image} alt="Sahara Caravans workshop in Campbellfield, Victoria" loading="lazy" />
            <div className="heritage__image-badge" aria-hidden="true">
              <span className="heritage__image-badge-num">30+</span>
              <span className="heritage__image-badge-label">Years<br/>in the trade</span>
            </div>
          </RevealOnScroll>
        </div>

        <div className="heritage__content">
          <RevealOnScroll>
            <span className="section-eyebrow">{heritage.eyebrow}</span>
            <h2 className="section-label">{heritage.heading}</h2>
          </RevealOnScroll>

          {heritage.body.map((para, idx) => (
            <RevealOnScroll key={idx} delay={0.05 * (idx + 1)}>
              <p className="heritage__body">{para}</p>
            </RevealOnScroll>
          ))}

          <RevealOnScroll delay={0.3}>
            <p className="heritage__signature">{heritage.signature}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="heritage__stats">
              {heritage.stats.map((stat) => (
                <div key={stat.label} className="heritage__stat">
                  <div className="heritage__stat-value">{stat.value}</div>
                  <div className="heritage__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
