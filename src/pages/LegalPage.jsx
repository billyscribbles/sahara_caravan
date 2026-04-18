import SEO from '../lib/seo.jsx'
import { legal } from '../content/legal.js'
import './LegalPage.css'

export default function LegalPage({ type = 'privacy' }) {
  const doc = legal[type]
  if (!doc) return null

  return (
    <main className="legal-page">
      <SEO title={doc.title} path={`/${type}`} />
      <div className="container container--narrow legal-page__inner">
        <h1 className="legal-page__title">{doc.title}</h1>
        {doc.updated && <p className="legal-page__updated">{doc.updated}</p>}
        {doc.sections.map((s) => (
          <section key={s.heading} className="legal-page__section">
            <h2 className="legal-page__heading">{s.heading}</h2>
            <p className="legal-page__body">{s.body}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
