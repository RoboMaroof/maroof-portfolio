import Header from './components/Header'
import Intro from './components/Intro'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      <Header />
      <Intro />
      <ProjectsSection />
      <Contact />
      <Footer />
    </main>
  )
}
