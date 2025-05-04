import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import About from './pages/About/About.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}

export default App
