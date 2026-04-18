import SEO from '../lib/seo.jsx'
import Hero from '../components/sections/Hero.jsx'
import Heritage from '../components/sections/Heritage.jsx'
import WhySahara from '../components/sections/WhySahara.jsx'
import RangeGrid from '../components/sections/RangeGrid.jsx'
import BuildPhilosophy from '../components/sections/BuildPhilosophy.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import DealerTeaser from '../components/sections/DealerTeaser.jsx'
import EnquiryForm from '../components/sections/EnquiryForm.jsx'

export default function Home() {
  return (
    <main>
      <SEO path="/" />
      <Hero />
      <Heritage />
      <WhySahara />
      <RangeGrid />
      <BuildPhilosophy />
      <Testimonials />
      <DealerTeaser />
      <EnquiryForm />
    </main>
  )
}
