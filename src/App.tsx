import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Subjects from './components/Subjects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Subjects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
