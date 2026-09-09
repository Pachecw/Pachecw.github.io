import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
