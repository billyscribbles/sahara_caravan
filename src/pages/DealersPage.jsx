import { Phone, Mail, MapPin } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import ContactCTA from '../components/sections/ContactCTA.jsx'
import { dealers } from '../content/dealers.js'
import { scrollToId } from '../lib/smoothScroll.js'
import './DealersPage.css'

export default function DealersPage() {
  const activeStates = dealers.states.filter((s) => s.dealers.length > 0)

  return (
    <main className="dealers-page">
      <SEO
        title="Find a Dealer"
        description="Find your nearest Sahara Caravans dealer across Australia. Visit the range in person or get in touch and we'll connect you directly."
        path="/dealers"
      />

      <section className="dealers-page__hero">
        <div className="container dealers-page__hero-inner">
          <RevealOnScroll>
            <span className="section-eyebrow">{dealers.intro.eyebrow}</span>
            <h1 className="dealers-page__title">{dealers.intro.heading}</h1>
            <p className="dealers-page__sub">{dealers.intro.sub}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <nav className="dealers-page__tabs" aria-label="Jump to state">
              {activeStates.map((s) => (
                <button
                  key={s.code}
                  type="button"
                  onClick={() => scrollToId(`state-${s.code}`, 96)}
                  className="dealers-page__tab"
                >
                  {s.code}
                </button>
              ))}
            </nav>
          </RevealOnScroll>
        </div>
      </section>

      <section className="dealers-page__body">
        <div className="container">
          {activeStates.map((state, stateIdx) => (
            <RevealOnScroll key={state.code} delay={stateIdx * 0.04}>
              <div id={`state-${state.code}`} className="dealers-page__state">
                <div className="dealers-page__state-head">
                  <span className="dealers-page__state-code">{state.code}</span>
                  <h2 className="dealers-page__state-name">{state.name}</h2>
                </div>
                <div className="dealers-page__cards">
                  {state.dealers.map((dealer) => (
                    <article key={dealer.name} className="dealer-card">
                      <h3 className="dealer-card__name">{dealer.name}</h3>
                      <ul className="dealer-card__meta">
                        {dealer.address && (
                          <li>
                            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
                            <span>{dealer.address}</span>
                          </li>
                        )}
                        {dealer.phone && (
                          <li>
                            <Phone size={15} strokeWidth={1.8} aria-hidden="true" />
                            <a href={`tel:${dealer.phone.replace(/\s/g, '')}`}>{dealer.phone}</a>
                          </li>
                        )}
                        {dealer.email && (
                          <li>
                            <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                            <a href={`mailto:${dealer.email}`}>{dealer.email}</a>
                          </li>
                        )}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <ContactCTA
        eyebrow="Can't find your state?"
        heading="We'll put you in touch."
        sub="Drop us a line — we'll connect you with the nearest dealer or arrange a call directly with our team."
      />
    </main>
  )
}
