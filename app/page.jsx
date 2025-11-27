import Hero from '@/components/Hero'
import FeaturesCards from '@/components/FeaturesCards'
import AboutLocation from '@/components/AboutLocation'
import ModelsGrid from '@/components/ModelsGrid'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import CTAProvi from '@/components/CTAProvi'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesCards />
      <AboutLocation />
      <ModelsGrid />
      <Amenities />
      <Gallery />
      <Contact />
      <CTAProvi />
    </main>
  )
}
