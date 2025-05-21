import React from 'react'
import '../../styles/About.css'
import AboutImg from '../../assets/Images/Albert/about-img.webp'
import ExperienceElement from '../../components/ExperienceElement/ExperienceElement'
import { useExperienceElement } from '../../hooks/useExperienceElement'


const About = () => {
	const { dataToFill } = useExperienceElement()

	return (
		<div className='section'>
			<div className='name-section'>
				<p className='section-subtitle'>
					Conoce más
				</p>
				<p className='section-title'>
					Sobre Mí
				</p>
			</div>
			<div className='about-cont'>
				<div className='top-row'>
					<div className='about-img-section'>
						<img src={AboutImg} className='about-img' alt='about-img'/>
					</div>
						<div className='about-text-section'>
							<div className='experience-elements'>
								{dataToFill.map((element, index) => (
									<ExperienceElement 
										key={index}
										icon={element.icon}
										title={element.title}
										description={element.description}
										descriptionBold={element.descriptionBold}
										button={element.button}
										onclick={element.onclick}
									/>
								))}
							</div>
						</div>
					</div>
				<div className='bot-row'>
					<div className='experience-text'>
						<p className='text'>
								Soy <b>Albert Castro</b>, desarrollador web, enfocado en aprender y profundizar en React, MongoDB y SQL, y  Node.js con Express. He realizado prácticas en Kennwort Consulting & Technologies, donde trabajé en proyectos Saas reales enfocados en la venta de entradas y control de acceso de gimnasios. Con 10 años de experiencia previa como modelista en el sector automovilistico, con un entorno exigente, destaco por mi capacidad de trabajo en equipo y resolución de problemas. Siempre dispuesto a mejorar.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
