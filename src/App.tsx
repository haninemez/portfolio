import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SectionDivider from './components/layout/SectionDivider'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import PersonalSection from './components/sections/PersonalSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionDivider weight="heavy" />
        <AboutSection />
        <SectionDivider weight="heavy" />
        <ProjectsSection />
        <SectionDivider weight="heavy" />
        <PersonalSection />
        <SectionDivider weight="heavy" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
