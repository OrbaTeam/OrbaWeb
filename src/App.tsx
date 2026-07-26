import LightBackground from './components/LightBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ApproachSection from './components/ApproachSection'
import AboutSection from './components/AboutSection'
import VisionSection from './components/VisionSection'
import WhatWeBuildSection from './components/WhatWeBuildSection'
import RoadmapSection from './components/RoadmapSection'
import CorePrinciplesSection from './components/CorePrinciplesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 antialiased">
      {/* Light Background effect with subtle animated geometric elements */}
      <LightBackground />

      {/* Main Page Layout */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <ApproachSection />
          <AboutSection />
          <VisionSection />
          <WhatWeBuildSection />
          <RoadmapSection />
          <CorePrinciplesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
