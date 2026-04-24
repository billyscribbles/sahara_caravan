import SEO from '../lib/seo.jsx'
import RevealOnScroll from '../components/ui/RevealOnScroll.jsx'
import BuildProcess from '../components/sections/BuildProcess.jsx'
import BuildPhilosophy from '../components/sections/BuildPhilosophy.jsx'
import ContactCTA from '../components/sections/ContactCTA.jsx'
import './BuildPage.css'

export default function BuildPage() {
  return (
    <main className="build-page">
      <SEO
        title="The Build"
        description="Every Sahara caravan is built from the ground up in our Campbellfield workshop — chassis, body, plumbing, electrics, cabinetry, kitchen and bath, and a full road test. See how we do it."
        path="/build"
      />

      <section className="build-page__hero">
        <div className="container">
          <RevealOnScroll>
            <span className="section-eyebrow">The Build</span>
            <h1 className="build-page__title">Every Sahara is built from the ground up.</h1>
            <p className="build-page__sub">
              We don't buy-in modular shells or outsource the hard parts. Every van is welded, wired and fitted out by the team that signs off at handover — custom to the customer, from the first cut of steel to the final road test.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <BuildProcess showHeader={false} />
      <BuildPhilosophy />

      <ContactCTA
        eyebrow="Ready to start?"
        heading="Spec your Sahara."
        sub="Tell us the trips you're planning and the features that matter. We'll come back with a layout, a timeline, and a price."
      />
    </main>
  )
}
