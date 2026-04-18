import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import Heritage from '../components/sections/Heritage.jsx'
import WhySahara from '../components/sections/WhySahara.jsx'
import BuildPhilosophy from '../components/sections/BuildPhilosophy.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import EnquiryForm from '../components/sections/EnquiryForm.jsx'
import { site } from '../config/site.config.js'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <main className="about-page">
      <SEO
        title="About"
        description="Meet Sahara Caravans — a family-owned, Australian-made manufacturer with over 30 years of caravan craftsmanship from our Campbellfield, Victoria workshop."
        path="/about"
      />

      <section className="about-page__hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">About</span>
            <h1 className="about-page__title">{site.brand.name}</h1>
            <p className="about-page__tagline">{site.brand.tagline}</p>
          </RevealOnScroll>
        </div>
      </section>

      <Heritage />
      <WhySahara />
      <BuildPhilosophy />
      <Testimonials />
      <EnquiryForm
        eyebrow="Come visit"
        heading="Stop by the workshop."
        sub="We love showing people through. Give us a call to arrange a time — or start a conversation below."
      />
    </main>
  )
}
