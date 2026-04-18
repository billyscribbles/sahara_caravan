import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { site } from '../../config/site.config.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Only home has a full-bleed hero behind the navbar.
  const overlayMode = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const { brand, nav, cta, contact } = site

  const classes = [
    'navbar',
    overlayMode ? 'navbar--overlay' : 'navbar--solid',
    scrolled ? 'navbar--scrolled' : '',
    menuOpen ? 'navbar--menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label={brand.name}>
          <img src={brand.logoSrc} alt={brand.name} className="navbar__logo-img" />
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          {nav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              end
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="navbar__phone" aria-label={`Call ${contact.phone}`}>
              <Phone size={14} strokeWidth={2.2} />
              <span>{contact.phone}</span>
            </a>
          )}
          <Link to={cta.to} className="navbar__cta">
            {cta.label}
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} strokeWidth={1.8} /> : <Menu size={24} strokeWidth={1.8} />}
        </button>
      </div>

      <nav
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="navbar__mobile-inner">
          {nav.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar__mobile-actions">
            <Link to={cta.to} className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
              {cta.label}
            </Link>
            {contact.phone && (
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="navbar__mobile-phone">
                <Phone size={16} strokeWidth={2} />
                <span>{contact.phone}</span>
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
