import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { WhyNowSection } from './components/sections/WhyNowSection'
import { EngineSection } from './components/sections/EngineSection'
import { ApplicationsSection } from './components/sections/ApplicationsSection'
import { TeamSection } from './components/sections/TeamSection'
import { CTASection } from './components/sections/CTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WhyNowSection />
      <EngineSection />
      <ApplicationsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}
