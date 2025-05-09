import React from 'react'

const ExperienceElement = ({
  icon: Icon,
  tittle,
  description,
  descriptionBold,
  button,
	onclick
}) => {
  return (
		<div className="exp-element">
			<Icon className='exp-icon'/>
			<div className='exp-text'>
				<p className='exp-tittle'>{tittle}</p>
				<p className='exp-description'>{description}</p>
				<p className='exp-description-bold'>{descriptionBold}</p>
				<button className='exp-btn' onClick={onclick}>
					{button}
				</button>
			</div>
		</div>
	)
  
}

export default ExperienceElement
