import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { hero } from '../../content/hero.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__media">
        <img src={hero.image} alt="" aria-hidden="true" className="hero__image" fetchpriority="high" />
        <div className="hero__gradient" />
        <div className="hero__vignette" />
      </div>

      <div className="hero__inner">
        {hero.eyebrow && (
          <span className="hero__eyebrow hero__fade" style={{ animationDelay: '0.05s' }}>
            {hero.eyebrow}
          </span>
        )}

        <h1 className="hero__headline hero__fade" style={{ animationDelay: '0.15s' }}>
          {hero.headline}
          {hero.headlineAccent && (
            <>
              {' '}
              <span className="hero__headline-accent">{hero.headlineAccent}</span>
            </>
          )}
        </h1>

        <p className="hero__sub hero__fade" style={{ animationDelay: '0.25s' }}>
          {hero.subheadline}
        </p>

        <div className="hero__ctas hero__fade" style={{ animationDelay: '0.35s' }}>
          {hero.primaryCta && (
            <Link to={hero.primaryCta.to} className="hero__cta-primary">
              <span>{hero.primaryCta.label}</span>
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          )}
          {hero.secondaryCta && (
            <Link to={hero.secondaryCta.to} className="hero__cta-secondary">
              {hero.secondaryCta.label}
            </Link>
          )}
        </div>

        {hero.trust?.length > 0 && (
          <div className="hero__trust hero__fade" style={{ animationDelay: '0.5s' }}>
            {hero.trust.map((item) => (
              <span key={item} className="hero__trust-item">
                <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-dot" />
      </div>
    </section>
  )
}
