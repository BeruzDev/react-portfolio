import React from 'react'
import CheckIcon from '../../assets/Icons/Other/square-check.svg?react'

const SkillsElement = ({icon: Icon, tittle, tech}) => {
	return (
		<div className='skills-element'>
			<div className='skill-tittle-section'>
				<Icon className='skill-icon' />
				<p className='skill-tittle'>{tittle}</p>
			</div>
			<div className='skill-tech-section'>
				{tech.map((element, index) => (
					<div key={index} className='tech-item'>
						<CheckIcon className='check-icon'/>
						<span className='tech'>{element}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default SkillsElement
