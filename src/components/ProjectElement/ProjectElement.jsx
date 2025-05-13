import React from 'react'

const ProjectElement = ({
	image,
	title,
	description,
	technologies,
	github,
	githubOnclick,
	link,
	linkOnclick,
	isDark
}) => {
	return (
		<div className='project-element'>
			<div className='project-title-cont'>
				<p className='project-title'>{title}</p>
			</div>
			<div className='project-img'>
				<img src={image} className='img' alt='project-image'/>
			</div>
			<div className='project-text'>
				<p className='project-description'>{description}</p>
				<div className='project-technologies'>
					{technologies.map(({ light, dark}, i) => {
						const Icon = isDark ? dark : light
						return <Icon className='tech-icon' key={i}/>
					})}
				</div>
				<div className='project-btns'>
					<button className='btn' onClick={githubOnclick}>
						<p className='btn-text'>{github}</p>
					</button>
					<button className='btn' onClick={linkOnclick}>
						<p className='btn-text'>{link}</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProjectElement
