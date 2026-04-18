import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../lib/seo.jsx'
import './NotFoundPage.css'

export default function NotFoundPage() {
  return (
    <main className="notfound-page">
      <SEO title="Page not found" />
      <div className="container notfound-page__inner">
        <span className="notfound-page__num">404</span>
        <h1 className="notfound-page__title">We couldn't find that page.</h1>
        <p className="notfound-page__sub">
          The page may have moved, or the link might be old. Head back to the home page or explore the range.
        </p>
        <div className="notfound-page__ctas">
          <Link to="/" className="notfound-page__primary">
            <ArrowLeft size={17} strokeWidth={2.2} aria-hidden="true" />
            <span>Back home</span>
          </Link>
          <Link to="/range" className="notfound-page__secondary">See the range</Link>
        </div>
      </div>
    </main>
  )
}
