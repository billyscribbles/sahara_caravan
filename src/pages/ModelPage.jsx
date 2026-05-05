import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowRight, Check, Expand, Plus } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import SpecPill from '../components/ui/SpecPill.jsx'
import ModelCard from '../components/ui/ModelCard.jsx'
import VariantSwitcher from '../components/ui/VariantSwitcher.jsx'
import Lightbox from '../components/ui/Lightbox.jsx'
import { models, getModelBySlug, getVariantByKey, normaliseGallery, SIZE_LABELS } from '../content/models.js'
import './ModelPage.css'

const GALLERY_PREVIEW_COUNT = 3

function GalleryGroup({ heading, images, modelName, onOpen }) {
  if (!images || images.length === 0) return null
  const preview = images.slice(0, GALLERY_PREVIEW_COUNT)
  const hasMore = images.length > GALLERY_PREVIEW_COUNT
  return (
    <div className="model-page__gallery-group">
      <RevealOnScroll>
        <div className="model-page__gallery-group-head">
          <h3 className="model-page__gallery-heading">{heading}</h3>
          <span className="model-page__gallery-count">{images.length} photos</span>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div
          className="model-page__gallery-grid"
          role="list"
          aria-label={`${heading} photos`}
        >
          {preview.map((item, i) => (
            <button
              key={item.src}
              type="button"
              role="listitem"
              className="model-page__gallery-thumb"
              onClick={() => onOpen(i)}
              aria-label={item.caption || `${modelName} ${heading.toLowerCase()} ${i + 1}`}
            >
              <img src={item.src} alt="" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {hasMore && (
        <RevealOnScroll>
          <button
            type="button"
            className="model-page__gallery-more"
            onClick={() => onOpen(0)}
            aria-label={`See all ${images.length} ${heading.toLowerCase()} photos`}
          >
            <Expand size={15} strokeWidth={2.2} aria-hidden="true" />
            <span>See all {images.length} photos</span>
          </button>
        </RevealOnScroll>
      )}
    </div>
  )
}

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

const FEATURE_CATEGORIES = {
  build: {
    label: 'Build & Off-Road',
    test: /(chassis|suspension|hitch|drawbar|armou?r|che(ck|qu)er[- ]plate|honeycomb|axle|tyres?|rims?|coupling|stone[- ]guard|skirt|toolbox|do35|matte[- ]?black|graphics|leak[- ]tight|certified|terrain|hybrid frame|moulded roof|pvc[- ]ply|reinforced|sealed)/i,
  },
  kitchen: {
    label: 'Kitchen',
    test: /(galley|cooktop|oven|sink|fridge|microwave|bbq|kitchenette|benchtop|rangehood|carafan|cooking)/i,
  },
  bath: {
    label: 'Bathroom',
    test: /(ensuite|shower|toilet|vanity|washing[- ]machine|washer|laundry|basin|hex[- ]?(agon)?[- ]?tile|tapware|wet[- ]wall)/i,
  },
  power: {
    label: 'Power & Climate',
    test: /(solar|lithium|battery|batteries|inverter|charger|electrical|fuse|regulator|projecta|techworld|diesel heater|air[- ]?con|sirocco|ceiling fan|fresh[- ]?water|grey[- ]?water|water tank|powerpoint|gas[- ]bottle)/i,
  },
  living: {
    label: 'Inside & Living',
    test: /(dinette|lounge|recliner|bed(room|s|side)?|queen|single|headboard|wardrobe|robe|cushion|cafe|sofa|seating|sleep|sleeping|skylight|panoramic|window|tv\b|reading light|cabinetry)/i,
  },
}
const FEATURE_MATCH_ORDER = ['build', 'kitchen', 'bath', 'power', 'living']
const FEATURE_DISPLAY_ORDER = ['build', 'living', 'kitchen', 'bath', 'power']
const FEATURE_TAB_THRESHOLD = 7

function categoriseFeatures(features) {
  const buckets = {}
  const fallback = []
  for (const f of features) {
    let matchedId = null
    for (const id of FEATURE_MATCH_ORDER) {
      if (FEATURE_CATEGORIES[id].test.test(f)) { matchedId = id; break }
    }
    if (matchedId) {
      if (!buckets[matchedId]) buckets[matchedId] = []
      buckets[matchedId].push(f)
    } else {
      fallback.push(f)
    }
  }
  const tabs = FEATURE_DISPLAY_ORDER
    .filter((id) => buckets[id]?.length > 0)
    .map((id) => ({ id, label: FEATURE_CATEGORIES[id].label, items: buckets[id] }))
  if (fallback.length > 0) tabs.push({ id: 'more', label: 'More', items: fallback })
  return tabs
}

function resolveFields(model, variant) {
  if (!variant) {
    return {
      heroImage: model.heroImage,
      description: model.description,
      features: model.features ?? [],
      specs: model.specs ?? {},
      specsBySize: model.specsBySize ?? null,
      gallery: normaliseGallery(model),
      floorPlan: model.floorPlan ?? null,
      floorPlanNote: model.floorPlanNote ?? null,
      sizes: model.sizes ?? null,
      floorPlansBySize: model.floorPlansBySize ?? null,
      ctaLabel: model.ctaLabel,
      inclusions: model.inclusions ?? null,
      technicalSpecs: model.technicalSpecs ?? null,
      technicalSpecsBySize: model.technicalSpecsBySize ?? null,
    }
  }
  return {
    heroImage: variant.heroImage ?? model.heroImage,
    description: variant.description ?? model.description,
    features: variant.features ?? model.features ?? [],
    specs: variant.specs ?? model.specs ?? {},
    specsBySize: variant.specsBySize ?? model.specsBySize ?? null,
    gallery: variant.gallery ?? normaliseGallery(model),
    floorPlan: variant.floorPlan ?? model.floorPlan ?? null,
    floorPlanNote: variant.floorPlanNote ?? model.floorPlanNote ?? null,
    sizes: variant.sizes ?? model.sizes ?? null,
    floorPlansBySize: variant.floorPlansBySize ?? model.floorPlansBySize ?? null,
    ctaLabel: variant.ctaLabel ?? model.ctaLabel,
    inclusions: variant.inclusions ?? model.inclusions ?? null,
    technicalSpecs: variant.technicalSpecs ?? model.technicalSpecs ?? null,
    technicalSpecsBySize: variant.technicalSpecsBySize ?? model.technicalSpecsBySize ?? null,
  }
}

// Prefer a size that actually has a floor plan so first paint shows the layout
// rather than a "coming soon" placeholder. Falls back to the first size when
// no per-size plans are defined.
function pickDefaultSize(fields) {
  const sizes = fields.sizes ?? []
  if (sizes.length === 0) return null
  const map = fields.floorPlansBySize
  if (map && Object.keys(map).length > 0) {
    const withPlan = sizes.find((s) => map[s])
    if (withPlan) return withPlan
  }
  return sizes[0]
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

  const featureTabs = useMemo(() => categoriseFeatures(fields.features), [fields.features])
  const useFeatureTabs = fields.features.length >= FEATURE_TAB_THRESHOLD && featureTabs.length > 1
  const [activeFeatureTab, setActiveFeatureTab] = useState(featureTabs[0]?.id ?? null)
  useEffect(() => {
    if (!featureTabs.some((t) => t.id === activeFeatureTab)) {
      setActiveFeatureTab(featureTabs[0]?.id ?? null)
    }
  }, [featureTabs, activeFeatureTab])
  const activeBucket = featureTabs.find((t) => t.id === activeFeatureTab) ?? featureTabs[0]
  const visibleFeatures = useFeatureTabs ? (activeBucket?.items ?? []) : fields.features

  // Size selector for the floor-plan section. Caravans come in six body
  // lengths; the X-Master Slide-Out is single-size (22'6). When floorPlansBySize
  // has any entries, sizes not in it show the "coming soon" placeholder. An
  // empty floorPlansBySize means "default applies to every size".
  const [activeSize, setActiveSize] = useState(() => {
    const fromUrl = new URLSearchParams(location.search).get('size')
    if (fromUrl && fields.sizes?.includes(fromUrl)) return fromUrl
    return pickDefaultSize(fields)
  })

  // Resolve specs and the technical-spec build sheet from the per-size maps
  // (sourced from the equivalent old-site listings) and fall back to the
  // variant-/model-level defaults for sizes the old site doesn't cover (16'6
  // and the X-Master Slide-Out's chassis package).
  const sizeSpecs = activeSize ? fields.specsBySize?.[activeSize] : null
  const currentSpecs = sizeSpecs ? { ...fields.specs, ...sizeSpecs } : fields.specs
  const sizeTechSpecs = activeSize ? fields.technicalSpecsBySize?.[activeSize] : null
  const currentTechnicalSpecs = sizeTechSpecs ?? fields.technicalSpecs

  const [activeTechSpecTab, setActiveTechSpecTab] = useState(currentTechnicalSpecs?.[0]?.id ?? null)
  useEffect(() => {
    if (currentTechnicalSpecs && !currentTechnicalSpecs.some((t) => t.id === activeTechSpecTab)) {
      setActiveTechSpecTab(currentTechnicalSpecs[0]?.id ?? null)
    }
  }, [currentTechnicalSpecs, activeTechSpecTab])
  const activeTechSpec = currentTechnicalSpecs?.find((t) => t.id === activeTechSpecTab) ?? currentTechnicalSpecs?.[0]
  const prevActiveKey = useRef(activeKey)
  useEffect(() => {
    // If the current size isn't valid in the new variant, reset (e.g. Standard
    // → Slide-Out where sizes drops to ['22-6']).
    if (fields.sizes && !fields.sizes.includes(activeSize)) {
      setActiveSize(pickDefaultSize(fields))
      prevActiveKey.current = activeKey
      return
    }
    // On variant change only: if the kept size has no plan in the new variant
    // but the variant does have plans elsewhere, jump to a size with a plan so
    // the user always lands on a drawn layout instead of "coming soon".
    if (prevActiveKey.current !== activeKey) {
      prevActiveKey.current = activeKey
      const map = fields.floorPlansBySize
      if (map && Object.keys(map).length > 0 && !map[activeSize]) {
        setActiveSize(pickDefaultSize(fields))
      }
    }
  }, [activeKey, fields.sizes, fields.floorPlansBySize, activeSize])
  const hasSizeMap =
    fields.floorPlansBySize && Object.keys(fields.floorPlansBySize).length > 0
  const currentFloorPlan = activeSize && hasSizeMap
    ? fields.floorPlansBySize[activeSize] ?? null
    : fields.floorPlan
  const firstSizeWithPlan = hasSizeMap
    ? fields.sizes?.find((s) => fields.floorPlansBySize[s]) ?? null
    : null

  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 })
  const openLightbox = (images, index) => setLightbox({ open: true, images, index })
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }))

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const defaultSize = pickDefaultSize(fields)
    if (activeSize && activeSize !== defaultSize) {
      params.set('size', activeSize)
    } else {
      params.delete('size')
    }
    const search = params.toString()
    const next = `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`
    window.history.replaceState(window.history.state, '', next)
  }, [activeSize, fields])

  const related = models.filter((m) => m.slug !== model.slug)
  const variantLabel = activeVariant ? ` — ${activeVariant.label}` : ''
  const shortName = model.name.replace('Sahara ', '')

  // Alternating tone helper — first content section is light (white breather),
  // then dark, then light, etc. Counter only ticks for sections that actually
  // render, so the rhythm holds when optional sections (floor plan / inclusions)
  // are absent.
  let toneIdx = 0
  const nextTone = () => {
    const tone = toneIdx % 2 === 0 ? 'section--alt' : 'section--dark'
    toneIdx++
    return tone
  }

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

      {(fields.floorPlan || (fields.sizes && fields.sizes.length > 0)) && (
        <section className={`model-page__floorplan section ${nextTone()}`}>
          <div className="container">
            {fields.sizes && fields.sizes.length > 0 && (
              <RevealOnScroll>
                <div className="model-page__size-tabs" role="tablist" aria-label="Body length">
                  <span className="model-page__size-tabs-label">Sizes</span>
                  {fields.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      role="tab"
                      aria-selected={size === activeSize}
                      aria-controls="floorplan-image"
                      className={`model-page__size-tab ${size === activeSize ? 'is-active' : ''}`}
                      onClick={() => setActiveSize(size)}
                    >
                      {SIZE_LABELS[size] ?? size}
                    </button>
                  ))}
                </div>
              </RevealOnScroll>
            )}
            <RevealOnScroll>
              <h2 className="section-label">
                See the layout.<sup className="model-page__floorplan-asterisk" aria-hidden="true">*</sup>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              {currentFloorPlan ? (
                <img
                  id="floorplan-image"
                  src={currentFloorPlan}
                  alt={`${model.name}${activeVariant ? ` ${activeVariant.label}` : ''}${activeSize ? ` ${SIZE_LABELS[activeSize] ?? activeSize}` : ''} floor plan`}
                  className="model-page__floorplan-img"
                  loading="lazy"
                />
              ) : (
                <div
                  id="floorplan-image"
                  role="tabpanel"
                  className="model-page__floorplan-placeholder"
                >
                  <span className="model-page__floorplan-placeholder-headline">
                    Floor plan coming soon.
                  </span>
                  {firstSizeWithPlan && firstSizeWithPlan !== activeSize && (
                    <>
                      <p className="model-page__floorplan-placeholder-note">
                        Floor plans are largely the same — variations are due to size only.
                      </p>
                      <button
                        type="button"
                        className="model-page__floorplan-placeholder-link"
                        onClick={() => setActiveSize(firstSizeWithPlan)}
                      >
                        See the {SIZE_LABELS[firstSizeWithPlan] ?? firstSizeWithPlan} layout
                      </button>
                    </>
                  )}
                </div>
              )}
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <p className="model-page__floorplan-note">
                <span aria-hidden="true">*</span>{' '}
                {fields.floorPlanNote ?? 'Sample layout — every Sahara is fully customisable to suit how you travel.'}
              </p>
            </RevealOnScroll>
          </div>
        </section>
      )}

      <section className={`model-page__features-section section ${nextTone()}`}>
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">
              About the {shortName}{activeVariant ? ` ${activeVariant.label}` : ''}
            </span>
            <h2 className="section-label">
              What's in the {shortName}{activeVariant ? ` ${activeVariant.label}` : ''}.
            </h2>
            <p className="model-page__intro-body">{fields.description}</p>
            {useFeatureTabs && (
              <p className="section-sub">
                Tap a category below to focus on the parts of the build that matter to you.
              </p>
            )}
          </RevealOnScroll>

          {useFeatureTabs && (
            <RevealOnScroll delay={0.05}>
              <div
                className="model-page__feature-tabs"
                role="tablist"
                aria-label="Feature categories"
              >
                {featureTabs.map((tab) => {
                  const isActive = tab.id === activeBucket?.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`feature-tab-${tab.id}`}
                      aria-selected={isActive}
                      aria-controls={`feature-panel-${tab.id}`}
                      className={`model-page__feature-tab${isActive ? ' is-active' : ''}`}
                      onClick={() => setActiveFeatureTab(tab.id)}
                    >
                      <span>{tab.label}</span>
                      <span className="model-page__feature-tab-count">{tab.items.length}</span>
                    </button>
                  )
                })}
              </div>
            </RevealOnScroll>
          )}

          <RevealOnScroll delay={0.1}>
            <ul
              className="model-page__feature-cards"
              {...(useFeatureTabs && activeBucket
                ? {
                    id: `feature-panel-${activeBucket.id}`,
                    role: 'tabpanel',
                    'aria-labelledby': `feature-tab-${activeBucket.id}`,
                  }
                : {})}
            >
              {visibleFeatures.map((f) => (
                <li key={f} className="model-page__feature-card">
                  <span className="model-page__feature-card-icon">
                    <Check size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <p className="model-page__feature-card-text">{f}</p>
                </li>
              ))}
            </ul>
            <p className="model-page__specs-note">
              All of our vans can be built in aluminium frame or hybrid pvc/meranti.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className={`model-page__gallery section ${nextTone()}`}>
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-label">Have a closer look.</h2>
            <p className="section-sub">Tap any photo to open the full-screen viewer.</p>
          </RevealOnScroll>

          <div className="model-page__gallery-groups">
            <GalleryGroup
              heading="Outside"
              images={fields.gallery.exterior}
              modelName={model.name}
              onOpen={(i) => openLightbox(fields.gallery.exterior, i)}
            />
            <GalleryGroup
              heading="Inside"
              images={fields.gallery.interior}
              modelName={model.name}
              onOpen={(i) => openLightbox(fields.gallery.interior, i)}
            />
          </div>
        </div>
      </section>

      <Lightbox
        open={lightbox.open}
        images={lightbox.images}
        startIndex={lightbox.index}
        onClose={closeLightbox}
        alt={`${model.name} gallery`}
      />

      <section className={`model-page__specs section ${nextTone()}`}>
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
                <SpecPill key={key} label={label} value={currentSpecs[key] || 'TBC'} tone="accent" />
              ))}
            </div>
            <p className="model-page__specs-note">
              Weights vary between builds — ATM, TARE and GTM figures are a guide only and are confirmed on your individual build plate.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {currentTechnicalSpecs && currentTechnicalSpecs.length > 0 && activeTechSpec && (
        <section className={`model-page__tech-specs section ${nextTone()}`}>
          <div className="container">
            <RevealOnScroll>
              <span className="section-eyebrow">Technical Specification</span>
              <h2 className="section-label">Every part, on the record.</h2>
              <p className="section-sub">
                The full build sheet — pick a category to see what's fitted as standard.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <div
                className="model-page__feature-tabs"
                role="tablist"
                aria-label="Technical specification categories"
              >
                {currentTechnicalSpecs.map((tab) => {
                  const isActive = tab.id === activeTechSpec.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`tech-tab-${tab.id}`}
                      aria-selected={isActive}
                      aria-controls={`tech-panel-${tab.id}`}
                      className={`model-page__feature-tab${isActive ? ' is-active' : ''}`}
                      onClick={() => setActiveTechSpecTab(tab.id)}
                    >
                      <span>{tab.label}</span>
                      <span className="model-page__feature-tab-count">{tab.rows.length}</span>
                    </button>
                  )
                })}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <dl
                id={`tech-panel-${activeTechSpec.id}`}
                role="tabpanel"
                aria-labelledby={`tech-tab-${activeTechSpec.id}`}
                className="model-page__tech-table"
              >
                {activeTechSpec.rows.map((row) => (
                  <div key={row.label} className="model-page__tech-row">
                    <dt className="model-page__tech-row-label">{row.label}</dt>
                    <dd className="model-page__tech-row-value">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="model-page__specs-note">
                Specifications listed are guides — final build is confirmed in writing on your quote. Weights vary between builds; ATM, TARE and GTM figures are confirmed on the build plate.
              </p>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {fields.inclusions && (
        <section className={`model-page__inclusions section ${nextTone()}`}>
          <div className="container">
            <RevealOnScroll>
              <span className="section-eyebrow">Inclusions</span>
              <h2 className="section-label">What's standard, what's an add-on.</h2>
              <p className="section-sub">
                {fields.inclusions.title} — every build comes with the standard list. The add-ons are optional extras you can spec onto your van. Final pricing is confirmed in writing on your quote.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="model-page__inclusions-grid">
                {fields.inclusions.included?.length > 0 && (
                  <div className="model-page__inclusions-card model-page__inclusions-card--standard">
                    <div className="model-page__inclusions-head">
                      <span className="model-page__inclusions-label">Standard</span>
                      <span className="model-page__inclusions-count">{fields.inclusions.included.length} items</span>
                    </div>
                    <ul className="model-page__inclusions-list">
                      {fields.inclusions.included.map((item) => (
                        <li key={item}>
                          <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {fields.inclusions.addOns?.length > 0 && (
                  <div className="model-page__inclusions-card model-page__inclusions-card--addon">
                    <div className="model-page__inclusions-head">
                      <span className="model-page__inclusions-label">Optional add-ons</span>
                      <span className="model-page__inclusions-count">{fields.inclusions.addOns.length} items</span>
                    </div>
                    <ul className="model-page__inclusions-list">
                      {fields.inclusions.addOns.map((item) => (
                        <li key={item}>
                          <Plus size={16} strokeWidth={2.4} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <p className="model-page__inclusions-note">
                Pricing for add-ons varies by build configuration — contact us for a current quote.
              </p>
            </RevealOnScroll>
          </div>
        </section>
      )}

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
