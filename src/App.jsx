import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
