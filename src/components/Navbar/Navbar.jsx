import React from 'react'
import '../../Styles/Navbar.css'
import { useHamburguer } from '../../hooks/useHamburguer.js'
import { Sun, SunMoon, Menu, X } from 'lucide-react'

const Navbar = ({ toggleTheme, isDark }) => {
  const { isMobile, isOpen, toggleMenu } = useHamburguer()

  return (
    <div className="navbar">
      <div className="logo">Albert Castro</div>
      <div className="menu-cont">
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
        </div>
        {isMobile && (
          <button className="hamburguer-toggle" onClick={toggleMenu}>
            {isOpen ? (
              <X size={20} strokeWidth={1.25} />
            ) : (
              <Menu size={20} strokeWidth={1.25} />
            )}
          </button>
        )}
        {isOpen && (
          <div className={`hamburguer ${isOpen ? 'open' : 'close'}`}>
            <button
              className="menu-btn"
              onClick={() => {
                document
                  .getElementById('about')
                  .scrollIntoView({ behavior: 'smooth' })
                toggleMenu()
              }}
            >
              Sobre mí
            </button>
            <button
              className="menu-btn"
              onClick={() => {
                document
                  .getElementById('skills')
                  .scrollIntoView({ behavior: 'smooth' })
                toggleMenu()
              }}
            >
              Habilidades
            </button>
            <button
              className="menu-btn"
              onClick={() => {
                document
                  .getElementById('projects')
                  .scrollIntoView({ behavior: 'smooth' })
                toggleMenu()
              }}
            >
              Proyectos
            </button>
            <button
              className="menu-btn"
              onClick={() => {
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
                toggleMenu()
              }}
            >
              Contacto
            </button>
          </div>
        )}
        <div className="theme">
          <button
            className="theme-btn"
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
    </div>
  )
}

export default Navbar
