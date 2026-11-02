import { BlogPage } from './components/blog/BlogPage'
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
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const isBlog = path === '/blog' || path.startsWith('/blog/')

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Navbar />
      {isBlog ? <BlogPage path={path} /> : <>
      <HeroSection />
      <ProblemSection />
      <EngineSection />
      <ApplicationsSection />
      <AVSection />
      <CitySection />
      <CTASection />
      </>}
      <Footer />
    </div>
  )
}
