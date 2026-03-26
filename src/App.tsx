import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { ProblemSection } from './components/sections/ProblemSection'
import { HowItWorksSection } from './components/sections/HowItWorksSection'
import { RoadmapSection } from './components/sections/RoadmapSection'
import { CredentialsSection } from './components/sections/CredentialsSection'
import { CTASection } from './components/sections/CTASection'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <RoadmapSection />
      <CredentialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
