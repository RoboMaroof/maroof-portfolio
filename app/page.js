import Header from './components/Header'
import IntroSection from './components/IntroSection'
import ProjectsSection from './components/ProjectsSection'
import PublicationsSection from './components/PublicationsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <IntroSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
