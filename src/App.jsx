import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import About from './Pages/About/About.jsx'
import Skills from './Pages/Skills/Skills.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import useTheme from './Hooks/useTheme.js'
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
