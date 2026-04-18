import SEO from '../lib/seo.jsx'
import Hero from '../components/sections/Hero.jsx'
import Heritage from '../components/sections/Heritage.jsx'
import WhySahara from '../components/sections/WhySahara.jsx'
import RangeGrid from '../components/sections/RangeGrid.jsx'
import CustomBuilds from '../components/sections/CustomBuilds.jsx'
import BuildPhilosophy from '../components/sections/BuildPhilosophy.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import DealerTeaser from '../components/sections/DealerTeaser.jsx'
import BrandWheel from '../components/sections/BrandWheel.jsx'
import EnquiryForm from '../components/sections/EnquiryForm.jsx'

export default function Home() {
  return (
    <main>
      <SEO path="/" />
      <Hero />
      <Heritage />
      <WhySahara />
      <RangeGrid />
      <CustomBuilds />
      <BuildPhilosophy />
      <Testimonials />
      <DealerTeaser />
      <BrandWheel />
      <EnquiryForm />
    </main>
  )
}
