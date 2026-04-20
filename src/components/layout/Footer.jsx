import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../../config/site.config.js'
import './Footer.css'

export default function Footer() {
  const { brand, footer, social, contact } = site

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={brand.logoSrc} alt={brand.name} className="footer__logo-img" />
          </div>
          <p className="footer__tagline">{brand.tagline}</p>
          <div className="footer__socials">
            {social.facebook && (
              <a href={social.facebook} className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.8} />
              </a>
            )}
            {social.instagram && (
              <a href={social.instagram} className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.8} />
              </a>
            )}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title} className="footer__col">
            <div className="footer__col-title">{col.title}</div>
            <ul className="footer__links">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <div className="footer__col-title">Contact</div>
          <ul className="footer__contact">
            {contact.location && (
              <li>
                <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{contact.location}</span>
              </li>
            )}
            {contact.phone && (
              <li>
                <Phone size={15} strokeWidth={1.8} aria-hidden="true" />
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer__link">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <Mail size={15} strokeWidth={1.8} aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="footer__link">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.hours && (
              <li className="footer__hours">{contact.hours}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copyright">{footer.copyright}</span>
        <span className="footer__credit">
          Site by{' '}
          <a
            href="https://www.onraistudio.com"
            className="footer__credit-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onrai Studio
          </a>
        </span>
        <div className="footer__legal">
          <Link to="/privacy" className="footer__legal-btn">Privacy</Link>
          <Link to="/terms" className="footer__legal-btn">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
