import { useState } from 'react'
import { ArrowRight, Hammer, Users, LayoutGrid, Wrench, Sparkles } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import SectionHeader from '../components/ui/SectionHeader.jsx'
import { site } from '../config/site.config.js'
import { dealers } from '../content/dealers.js'
import { becomeDealer } from '../content/becomeDealer.js'
import '../components/sections/EnquiryForm.css'
import './BecomeDealerPage.css'

const ICONS = { Hammer, Users, LayoutGrid, Wrench }

const initialState = {
  business: '',
  contactName: '',
  email: '',
  phone: '',
  state: '',
  address: '',
  years: '',
  showroom: '',
  currentBrands: '',
  message: '',
}

export default function BecomeDealerPage() {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const formspreeId = site.integrations.formspreeId

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    if (!formspreeId) {
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
      setValues(initialState)
      return
    }

    try {
      const body = new FormData()
      body.append('_subject', 'Dealer Application — Sahara Caravans')
      body.append('formName', 'dealer-application')
      Object.entries(values).forEach(([k, v]) => body.append(k, v))
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        setValues(initialState)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="become-dealer-page">
      <SEO
        title="Become a Dealer"
        description="Apply to become a Sahara Caravans dealer. We work with a small network of caravan and RV dealers across Australia — get in touch and we'll be back within 2–3 business days."
        path="/become-a-dealer"
      />

      <section className="become-dealer-page__hero">
        <div className="container become-dealer-page__hero-inner">
          <RevealOnScroll>
            <span className="section-eyebrow">{becomeDealer.intro.eyebrow}</span>
            <h1 className="become-dealer-page__title">{becomeDealer.intro.heading}</h1>
            <p className="become-dealer-page__sub">{becomeDealer.intro.sub}</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="become-dealer-page__benefits section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow={becomeDealer.benefits.eyebrow}
            heading={becomeDealer.benefits.heading}
            sub={becomeDealer.benefits.sub}
            align="center"
          />
          <div className="become-dealer-page__benefits-grid">
            {becomeDealer.benefits.pillars.map((pillar, i) => {
              const Icon = ICONS[pillar.icon] || Sparkles
              return (
                <RevealOnScroll key={pillar.title} delay={i * 0.06}>
                  <article className="benefit-card">
                    <div className="benefit-card__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="benefit-card__title">{pillar.title}</h3>
                    <p className="benefit-card__body">{pillar.body}</p>
                  </article>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      <section className="become-dealer-page__process">
        <div className="container">
          <SectionHeader
            eyebrow={becomeDealer.process.eyebrow}
            heading={becomeDealer.process.heading}
            align="center"
          />
          <ol className="become-dealer-page__steps">
            {becomeDealer.process.steps.map((step, i) => (
              <RevealOnScroll key={step.n} delay={i * 0.08}>
                <li className="step-card">
                  <span className="step-card__num">{step.n}</span>
                  <h3 className="step-card__title">{step.title}</h3>
                  <p className="step-card__body">{step.body}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <section className="become-dealer-page__form-wrap section section--dark" id="apply">
        <div className="container become-dealer-page__form-inner">
          <RevealOnScroll className="become-dealer-page__form-head">
            <span className="section-eyebrow">{becomeDealer.form.eyebrow}</span>
            <h2 className="section-label">{becomeDealer.form.heading}</h2>
            <p className="section-sub">{becomeDealer.form.sub}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form className="enquiry__form" onSubmit={handleSubmit} noValidate>
              <div className="enquiry__row">
                <label className="enquiry__field">
                  <span>Business / dealership name *</span>
                  <input
                    type="text"
                    name="business"
                    value={values.business}
                    onChange={update('business')}
                    required
                    autoComplete="organization"
                  />
                </label>
                <label className="enquiry__field">
                  <span>Contact name *</span>
                  <input
                    type="text"
                    name="contactName"
                    value={values.contactName}
                    onChange={update('contactName')}
                    required
                    autoComplete="name"
                  />
                </label>
              </div>

              <div className="enquiry__row">
                <label className="enquiry__field">
                  <span>Email *</span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={update('email')}
                    required
                    autoComplete="email"
                  />
                </label>
                <label className="enquiry__field">
                  <span>Phone *</span>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={update('phone')}
                    required
                    autoComplete="tel"
                  />
                </label>
              </div>

              <div className="enquiry__row">
                <label className="enquiry__field">
                  <span>State *</span>
                  <select name="state" value={values.state} onChange={update('state')} required>
                    <option value="">Select a state</option>
                    {dealers.states.map((s) => (
                      <option key={s.code} value={s.code}>{s.name}</option>
                    ))}
                  </select>
                </label>
                <label className="enquiry__field">
                  <span>Business address</span>
                  <input
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={update('address')}
                    autoComplete="street-address"
                    placeholder="Street, suburb, postcode"
                  />
                </label>
              </div>

              <div className="enquiry__row">
                <label className="enquiry__field">
                  <span>Years in the caravan / RV industry</span>
                  <select name="years" value={values.years} onChange={update('years')}>
                    <option value="">Select an option</option>
                    {becomeDealer.form.yearsOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </label>
                <label className="enquiry__field">
                  <span>Existing showroom or yard</span>
                  <select name="showroom" value={values.showroom} onChange={update('showroom')}>
                    <option value="">Select an option</option>
                    {becomeDealer.form.showroomOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="enquiry__field">
                <span>Brands currently sold</span>
                <input
                  type="text"
                  name="currentBrands"
                  value={values.currentBrands}
                  onChange={update('currentBrands')}
                  placeholder="e.g. brands you already carry, or 'none yet'"
                />
              </label>

              <label className="enquiry__field">
                <span>Why you'd like to partner with Sahara</span>
                <textarea
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={update('message')}
                  placeholder="A bit about your business, the customers you serve, and why you think Sahara would be a good fit."
                />
              </label>

              <div className="enquiry__foot">
                <button type="submit" className="enquiry__submit" disabled={status === 'submitting'}>
                  <span>{status === 'submitting' ? 'Sending…' : 'Submit application'}</span>
                  <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
                </button>
                {!formspreeId && (
                  <p className="enquiry__note">
                    Demo mode — submissions aren't delivered. Add <code>VITE_FORMSPREE_ID</code> to enable.
                  </p>
                )}
              </div>

              {status === 'success' && (
                <p className="enquiry__status enquiry__status--success">
                  Thanks — we've received your application and will be in touch within 2–3 business days.
                </p>
              )}
              {status === 'error' && (
                <p className="enquiry__status enquiry__status--error">
                  Something went wrong. Please email us at <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or call {site.contact.phone}.
                </p>
              )}
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
