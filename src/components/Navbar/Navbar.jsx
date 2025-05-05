import React from 'react'
import '../../Styles/Navbar.css'
import { Sun, SunMoon } from 'lucide-react'

const Navbar = ({ toggleTheme, isDark }) => {
  return (
    <div className="navbar">
      <div className="logo">Albert Castro</div>
      <div className="menu">
        <button
          className="menu-btn"
          onClick={() =>
            document
              .getElementById('about')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Sobre mí
        </button>
        <button
          className="menu-btn"
          onClick={() =>
            document
              .getElementById('skills')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Habilidades
        </button>
        <button
          className="menu-btn"
          onClick={() =>
            document
              .getElementById('projects')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Proyectos
        </button>
        <button
          className="menu-btn"
          onClick={() =>
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contacto
        </button>
        <button
          className="menu-btn theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun size={20} strokeWidth={1.25} />
          ) : (
            <SunMoon size={20} strokeWidth={1.25} />
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar
