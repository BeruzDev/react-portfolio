import React from 'react'
import '../../Styles/Navbar.css'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='logo'>
				Albert Castro
			</div>
			<div className='menu'>
				<button className='menu-btn' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth'})}>
					Sobre mí
				</button>
				<button className='menu-btn' onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth'})}>
					Habilidades
				</button>
				<button className='menu-btn' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth'})}>
					Proyectos
				</button>
				<button className='menu-btn' onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth'})}>
					Contacto
				</button>
			</div>
		</div>
	)
}

export default Navbar
