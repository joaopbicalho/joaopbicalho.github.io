import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutSection from './components/sections/AboutSection/AboutSection'
import Skills from './components/Skills/Skills'
import PortfolioSection from './components/sections/PortfolioSection/PortfolioSection'
import ContactSection from './components/sections/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutSection />
      <Skills />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
