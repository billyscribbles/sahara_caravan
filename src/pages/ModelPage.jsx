import { useEffect, useMemo, useState } from 'react'
import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import SpecPill from '../components/ui/SpecPill.jsx'
import ModelCard from '../components/ui/ModelCard.jsx'
import VariantSwitcher from '../components/ui/VariantSwitcher.jsx'
import { models, getModelBySlug, getVariantByKey, normaliseGallery } from '../content/models.js'
import './ModelPage.css'

const SPEC_ORDER = [
  ['sleeps', 'Sleeps'],
  ['length', 'Length'],
  ['tare', 'Tare'],
  ['gtm', 'GTM'],
  ['atm', 'ATM'],
  ['suspension', 'Suspension'],
  ['water', 'Water'],
  ['warranty', 'Warranty'],
]

function resolveFields(model, variant) {
  if (!variant) {
    return {
      heroImage: model.heroImage,
      description: model.description,
      features: model.features ?? [],
      specs: model.specs ?? {},
      gallery: normaliseGallery(model),
      ctaLabel: model.ctaLabel,
    }
  }
  return {
    heroImage: variant.heroImage ?? model.heroImage,
    description: variant.description ?? model.description,
    features: variant.features ?? model.features ?? [],
    specs: variant.specs ?? model.specs ?? {},
    gallery: variant.gallery ?? normaliseGallery(model),
    ctaLabel: variant.ctaLabel ?? model.ctaLabel,
  }
}

export default function ModelPage() {
  const { slug } = useParams()
  const location = useLocation()

  if (slug === 'custom-builds') return <Navigate to="/custom-builds" replace />
  const model = getModelBySlug(slug)
  if (!model) return <Navigate to="/range" replace />

  const hasVariants = Array.isArray(model.variants) && model.variants.length > 0
  const initialKey = useMemo(() => {
    if (!hasVariants) return null
    const params = new URLSearchParams(location.search)
    const fromUrl = params.get('v')
    const match = model.variants.find((v) => v.key === fromUrl)
    return match?.key ?? model.variants[0].key
  }, [hasVariants, location.search, model.variants])

  const [activeKey, setActiveKey] = useState(initialKey)
  const activeVariant = hasVariants ? getVariantByKey(model, activeKey) : null
  const fields = resolveFields(model, activeVariant)

  useEffect(() => {
    if (!hasVariants) return
    const params = new URLSearchParams(window.location.search)
    if (activeKey && activeKey !== model.variants[0].key) {
      params.set('v', activeKey)
    } else {
      params.delete('v')
    }
    const search = params.toString()
    const next = `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`
    window.history.replaceState(window.history.state, '', next)
  }, [activeKey, hasVariants, model.variants])

  const related = models.filter((m) => m.slug !== model.slug)
  const variantLabel = activeVariant ? ` — ${activeVariant.label}` : ''
  const shortName = model.name.replace('Sahara ', '')

  return (
    <main className="model-page">
      <SEO
        title={`${model.name}${variantLabel} — ${model.type}`}
        description={`${model.name}${variantLabel}: ${model.tagline} — ${fields.description.slice(0, 140)}…`}
        path={`/models/${model.slug}`}
      />

      <section className="model-page__hero">
        <div className="model-page__hero-media">
          <img src={fields.heroImage} alt={`${model.name} exterior`} fetchpriority="high" />
          <div className="model-page__hero-gradient" />
        </div>
        <div className="container model-page__hero-inner">
          <span className="model-page__type">{model.type}</span>
          <h1 className="model-page__name">{model.name}</h1>
          <p className="model-page__tagline">{model.tagline}</p>
        </div>
      </section>

      {hasVariants && (
        <section className="model-page__variants section">
          <div className="container">
            <RevealOnScroll>
              <VariantSwitcher
                variants={model.variants}
                activeKey={activeKey}
                onChange={setActiveKey}
                label={`Choose your ${shortName}`}
              />
            </RevealOnScroll>
          </div>
        </section>
      )}

      <section className="model-page__intro section">
        <div className="container model-page__intro-inner">
          <RevealOnScroll className="model-page__intro-copy">
            <span className="section-eyebrow">
              About the {shortName}{activeVariant ? ` ${activeVariant.label}` : ''}
            </span>
            <p className="model-page__intro-body">{fields.description}</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15} className="model-page__features">
            <div className="model-page__features-title">Features</div>
            <ul className="model-page__features-list">
              {fields.features.map((f) => (
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

          {fields.gallery.exterior?.length > 0 && (
            <div className="model-page__gallery-group">
              <RevealOnScroll>
                <h3 className="model-page__gallery-heading">Outside</h3>
              </RevealOnScroll>
              <div className="model-page__gallery-grid">
                {fields.gallery.exterior.map((item, i) => (
                  <RevealOnScroll key={item.src} delay={i * 0.04}>
                    <figure className="model-page__gallery-item">
                      <img
                        src={item.src}
                        alt={item.caption || `${model.name} exterior ${i + 1}`}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                      {item.caption && <figcaption>{item.caption}</figcaption>}
                    </figure>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )}

          {fields.gallery.interior?.length > 0 && (
            <div className="model-page__gallery-group">
              <RevealOnScroll>
                <h3 className="model-page__gallery-heading">Inside</h3>
              </RevealOnScroll>
              <div className="model-page__gallery-grid">
                {fields.gallery.interior.map((item, i) => (
                  <RevealOnScroll key={item.src} delay={i * 0.04}>
                    <figure className="model-page__gallery-item">
                      <img
                        src={item.src}
                        alt={item.caption || `${model.name} interior ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                      {item.caption && <figcaption>{item.caption}</figcaption>}
                    </figure>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          )}
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
                <SpecPill key={key} label={label} value={fields.specs[key] || 'TBC'} tone="accent" />
              ))}
            </div>
            <p className="model-page__specs-note">
              Weights vary between builds — ATM, TARE and GTM figures are a guide only and are confirmed on your individual build plate.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="model-page__cta section section--dark">
        <div className="container model-page__cta-inner">
          <RevealOnScroll>
            <h2 className="model-page__cta-title">
              Ready to take the {shortName}{activeVariant ? ` ${activeVariant.label}` : ''} for a walk-through?
            </h2>
            <p className="model-page__cta-body">
              Visit our Campbellfield workshop or a dealer near you. We'll walk you through the build top to bottom.
            </p>
            <div className="model-page__cta-actions">
              <Link to="/contact" className="model-page__cta-primary">
                <span>{fields.ctaLabel}</span>
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

    </main>
  )
}
