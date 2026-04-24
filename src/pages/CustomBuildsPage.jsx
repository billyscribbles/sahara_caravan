import SEO from '../lib/seo.jsx'
import CustomBuilds from '../components/sections/CustomBuilds.jsx'
import ContactCTA from '../components/sections/ContactCTA.jsx'
import './CustomBuildsPage.css'

export default function CustomBuildsPage() {
  return (
    <main className="custom-builds-page">
      <SEO
        title="Custom Van Builds"
        description="Sahara designs and builds full motorhome fit-outs — turning a bare van into a small, considered home with a proper kitchen, bed, bathroom, and thoughtful storage."
        path="/custom-builds"
      />

      <CustomBuilds />

      <ContactCTA
        eyebrow="Ready to start?"
        heading="Tell us about the van you'd like to fit out."
        sub="Let us know the vehicle, the trips you're planning, and the must-haves. We'll come back with a layout, a timeline, and a price."
      />
    </main>
  )
}
