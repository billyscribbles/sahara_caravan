import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import EnquiryForm from '../components/sections/EnquiryForm.jsx'
import { site } from '../config/site.config.js'
import { faq } from '../content/faq.js'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SEO
        title="Contact"
        description="Get in touch with Sahara Caravans — call, email, or fill in our enquiry form. We reply within one business day."
        path="/contact"
      />

      <section className="contact-page__hero">
        <div className="container contact-page__hero-inner">
          <RevealOnScroll>
            <span className="section-eyebrow">Get in Touch</span>
            <h1 className="contact-page__title">Let's have a chat.</h1>
            <p className="contact-page__sub">
              Whether you're ready to order or just starting to look around, we're here to help. Call the workshop, send an email, or fill in the form below — we'll be back to you within one business day.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="contact-page__cards">
              <a className="contact-card" href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                <div className="contact-card__icon"><Phone size={20} strokeWidth={1.7} /></div>
                <div className="contact-card__label">Call us</div>
                <div className="contact-card__value">{site.contact.phone}</div>
              </a>
              <a className="contact-card" href={`mailto:${site.contact.email}`}>
                <div className="contact-card__icon"><Mail size={20} strokeWidth={1.7} /></div>
                <div className="contact-card__label">Email us</div>
                <div className="contact-card__value">{site.contact.email}</div>
              </a>
              <div className="contact-card contact-card--static">
                <div className="contact-card__icon"><MapPin size={20} strokeWidth={1.7} /></div>
                <div className="contact-card__label">Workshop</div>
                <div className="contact-card__value">{site.contact.location}</div>
              </div>
              <div className="contact-card contact-card--static">
                <div className="contact-card__icon"><Clock size={20} strokeWidth={1.7} /></div>
                <div className="contact-card__label">Hours</div>
                <div className="contact-card__value">{site.contact.hours}</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <EnquiryForm
        eyebrow="Send us a message"
        heading="Tell us about your trip."
        sub="The more you share, the better we can help — where you're heading, how long you'll be out there, who's coming along."
      />

      <section className="contact-page__faq section section--alt">
        <div className="container container--narrow">
          <RevealOnScroll>
            <span className="section-eyebrow">{faq.eyebrow}</span>
            <h2 className="section-label">{faq.heading}</h2>
          </RevealOnScroll>
          <div className="contact-page__faq-list">
            {faq.items.map((item, i) => (
              <RevealOnScroll key={item.q} delay={i * 0.05}>
                <details className="faq-item">
                  <summary className="faq-item__q">{item.q}</summary>
                  <p className="faq-item__a">{item.a}</p>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
