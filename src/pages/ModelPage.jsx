import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import SpecPill from '../components/ui/SpecPill.jsx'
import ModelCard from '../components/ui/ModelCard.jsx'
import EnquiryForm from '../components/sections/EnquiryForm.jsx'
import { models, getModelBySlug } from '../content/models.js'
import './ModelPage.css'

const SPEC_ORDER = [
  ['sleeps', 'Sleeps'],
  ['length', 'Length'],
  ['tare', 'Tare'],
  ['atm', 'ATM'],
  ['suspension', 'Suspension'],
  ['water', 'Water'],
  ['warranty', 'Warranty'],
]

export default function ModelPage() {
  const { slug } = useParams()
  const model = getModelBySlug(slug)

  if (!model) return <Navigate to="/range" replace />

  const related = models.filter((m) => m.slug !== model.slug)

  return (
    <main className="model-page">
      <SEO
        title={`${model.name} — ${model.type}`}
        description={`${model.name}: ${model.tagline} — ${model.description.slice(0, 140)}…`}
        path={`/models/${model.slug}`}
      />

      <section className="model-page__hero">
        <div className="model-page__hero-media">
          <img src={model.heroImage} alt={`${model.name} exterior`} fetchpriority="high" />
          <div className="model-page__hero-gradient" />
        </div>
        <div className="container model-page__hero-inner">
          <Link to="/range" className="model-page__back">
            <ArrowLeft size={16} strokeWidth={2.2} aria-hidden="true" />
            Back to range
          </Link>
          <span className="model-page__type">{model.type}</span>
          <h1 className="model-page__name">{model.name}</h1>
          <p className="model-page__tagline">{model.tagline}</p>
        </div>
      </section>

      <section className="model-page__intro section">
        <div className="container model-page__intro-inner">
          <RevealOnScroll className="model-page__intro-copy">
            <span className="section-eyebrow">About the {model.name.replace('Sahara ', '')}</span>
            <p className="model-page__intro-body">{model.description}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="model-page__features">
            <div className="model-page__features-title">Features</div>
            <ul className="model-page__features-list">
              {model.features.map((f) => (
                <li key={f}>
                  <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="model-page__gallery section section--alt">
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-label">Have a closer look.</h2>
          </RevealOnScroll>
          <div className="model-page__gallery-grid">
            {model.gallery.map((src, i) => (
              <RevealOnScroll key={src} delay={i * 0.06}>
                <div className="model-page__gallery-item">
                  <img src={src} alt={`${model.name} view ${i + 1}`} loading="lazy" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="model-page__specs section">
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">Specifications</span>
            <h2 className="section-label">The numbers behind the build.</h2>
            <p className="section-sub">
              Full specifications are confirmed in writing with every order — reach out for the current spec sheet.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="model-page__specs-grid">
              {SPEC_ORDER.map(([key, label]) => (
                <SpecPill key={key} label={label} value={model.specs[key] || 'TBC'} tone="accent" />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="model-page__cta section section--dark">
        <div className="container model-page__cta-inner">
          <RevealOnScroll>
            <h2 className="model-page__cta-title">Ready to take the {model.name.replace('Sahara ', '')} for a walk-through?</h2>
            <p className="model-page__cta-body">
              Visit our Campbellfield workshop or a dealer near you. We'll walk you through the build top to bottom.
            </p>
            <div className="model-page__cta-actions">
              <Link to="/contact" className="model-page__cta-primary">
                <span>{model.ctaLabel}</span>
                <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link to="/dealers" className="model-page__cta-secondary">Find a dealer</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="model-page__related section section--alt">
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">Other models</span>
            <h2 className="section-label">Compare with the rest of the range.</h2>
          </RevealOnScroll>
          <div className="model-page__related-grid">
            {related.map((m, i) => (
              <RevealOnScroll key={m.slug} delay={i * 0.06}>
                <ModelCard model={m} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm
        eyebrow={`Enquire about the ${model.name.replace('Sahara ', '')}`}
        heading="Start a conversation."
        sub="Tell us a little about you and we'll be in touch within one business day."
        defaultModel={model.name}
      />
    </main>
  )
}
