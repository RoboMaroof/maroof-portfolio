import Header from './components/Header'
import IntroSection from './components/IntroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import PublicationsSection from './components/PublicationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
