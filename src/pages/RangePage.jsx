import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import ModelCard from '../components/ui/ModelCard.jsx'
import EnquiryForm from '../components/sections/EnquiryForm.jsx'
import { models } from '../content/models.js'
import { customBuilds } from '../content/customBuilds.js'
import './RangePage.css'

export default function RangePage() {
  return (
    <main className="range-page">
      <SEO
        title="Our Range"
        description="Explore the full Sahara Caravans range — on-road, off-road, semi-off-road, and family models, all built by hand in Campbellfield, Victoria."
        path="/range"
      />
      <section className="range-page__hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">The Full Range</span>
            <h1 className="range-page__title">Four vans. And one bespoke fit-out.</h1>
            <p className="range-page__sub">
              Every Sahara is built to the same uncompromising standard — the difference between the models is simply where you want to take them.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="range-page__list">
        <div className="container">
          <div className="range-page__grid">
            {models.map((model, i) => (
              <RevealOnScroll key={model.slug} delay={i * 0.06}>
                <ModelCard model={model} eager={i < 2} />
              </RevealOnScroll>
            ))}
            <RevealOnScroll key={customBuilds.card.slug} delay={models.length * 0.06}>
              <ModelCard model={customBuilds.card} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <EnquiryForm
        eyebrow="Ready to talk?"
        heading="Not sure which model is right for you?"
        sub="Tell us about the trips you're planning — we'll help you find the right fit."
      />
    </main>
  )
}
