import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoTicker from './components/LogoTicker'
import Services from './components/Services'
import Process from './components/Process'
import Work from './components/Work'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Founder from './components/Founder'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Banner Section */}
      <Hero />

      {/* Infinite scrolling Trusted logo brand ticker */}
      <LogoTicker />

      {/* Core Studio Services */}
      <Services />

      {/* Workflow Process Steps */}
      <Process />

      {/* Client Selected Work Grid */}
      <Work />

      {/* Grid of Six reasons to choose the studio */}
      <WhyUs />

      {/* Rating Testimonials quotes */}
      <Testimonials />

      {/* Personal Spotlight on the founder */}
      <Founder />

      {/* Collapsible FAQ accordion items */}
      <FAQ />

      {/* direct Formspree Project contact form */}
      <Contact />

      {/* Grid Footer links and contacts */}
      <Footer />
      
      {/* JSON-LD Schema structured data for high fidelity SEO performance */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "CodeCraft",
          "description": "CodeCraft is a web development studio building static, dynamic and custom websites that are fast, beautiful, responsive and SEO optimised.",
          "url": "https://CodeCraft.in",
          "telephone": "+91-85898-41074",
          "email": "muhammedshifinpkd@gmail.com",
          "areaServed": "Worldwide",
          "serviceType": [
            "Static Websites",
            "Dynamic Web Apps",
            "Custom Web Development",
            "E-commerce",
            "SEO"
          ]
        })}
      </script>
    </main>
  )
}

export default App


