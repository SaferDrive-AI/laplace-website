import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { EngineSection } from './components/sections/EngineSection'
import { ApplicationsSection } from './components/sections/ApplicationsSection'
import { AVSection } from './components/sections/AVSection'
import { CitySection } from './components/sections/CitySection'
import { CTASection } from './components/sections/CTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <EngineSection />
      <ApplicationsSection />
      <AVSection />
      <CitySection />
      <CTASection />
      <Footer />
    </div>
  )
}
