import Header from './components/Header'
import IntroSection from './components/IntroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import PublicationsSection from './components/PublicationsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="snap-y snap-mandatory">
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
    </>
  )
}
