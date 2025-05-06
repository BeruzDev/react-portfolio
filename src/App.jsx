import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './pages/About/About.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import useTheme from './hooks/useTheme.js'
import { Heart } from 'lucide-react'

function App() {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>Coded by BeruzDev</p>
        <Heart size={10} strokeWidth={2} className="footer-icon" />
      </footer>
    </div>
  )
}

export default App
