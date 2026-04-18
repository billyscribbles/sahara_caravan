import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import RevealOnScroll from '../ui/RevealOnScroll.jsx'
import { site } from '../../config/site.config.js'
import { models } from '../../content/models.js'
import { dealers } from '../../content/dealers.js'
import './EnquiryForm.css'

const initialState = { name: '', email: '', phone: '', state: '', model: '', message: '' }

export default function EnquiryForm({
  eyebrow = 'Get in touch',
  heading = "Start a conversation.",
  sub = "Tell us a little about you and we'll be in touch within one business day.",
  defaultModel = '',
}) {
  const [values, setValues] = useState({ ...initialState, model: defaultModel })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
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
      setValues({ ...initialState, model: defaultModel })
      return
    }

    try {
      const body = new FormData()
      Object.entries(values).forEach(([k, v]) => body.append(k, v))
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        setValues({ ...initialState, model: defaultModel })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="enquiry section section--dark" id="enquiry">
      <div className="container enquiry__inner">
        <RevealOnScroll className="enquiry__head">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-label">{heading}</h2>
          <p className="section-sub">{sub}</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form className="enquiry__form" onSubmit={handleSubmit} noValidate>
            <div className="enquiry__row">
              <label className="enquiry__field">
                <span>Name</span>
                <input type="text" name="name" value={values.name} onChange={update('name')} required autoComplete="name" />
              </label>
              <label className="enquiry__field">
                <span>Email</span>
                <input type="email" name="email" value={values.email} onChange={update('email')} required autoComplete="email" />
              </label>
            </div>
            <div className="enquiry__row">
              <label className="enquiry__field">
                <span>Phone</span>
                <input type="tel" name="phone" value={values.phone} onChange={update('phone')} autoComplete="tel" />
              </label>
              <label className="enquiry__field">
                <span>State</span>
                <select name="state" value={values.state} onChange={update('state')}>
                  <option value="">Select a state</option>
                  {dealers.states.map((s) => (
                    <option key={s.code} value={s.code}>{s.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="enquiry__field">
              <span>Model of interest (optional)</span>
              <select name="model" value={values.model} onChange={update('model')}>
                <option value="">Not sure yet</option>
                {models.map((m) => (
                  <option key={m.slug} value={m.name}>{m.name} — {m.type}</option>
                ))}
              </select>
            </label>
            <label className="enquiry__field">
              <span>Message</span>
              <textarea
                name="message"
                rows="5"
                value={values.message}
                onChange={update('message')}
                placeholder="Let us know what you're looking for, where you'd like to travel, or any questions you have."
              />
            </label>

            <div className="enquiry__foot">
              <button type="submit" className="enquiry__submit" disabled={status === 'submitting'}>
                <span>{status === 'submitting' ? 'Sending…' : 'Send enquiry'}</span>
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
                Thanks — we'll be in touch within one business day.
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
  )
}
