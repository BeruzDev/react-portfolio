import React from 'react'
import '../../styles/Skills.css'
import SkillsElement from '../../components/SkillsElement/SkillsElement'
import { useSkillElement } from '../../hooks/useSkillElement'

const Skills = () => {
  const { dataToFill } = useSkillElement()

  return (
    <div className="section">
      <div className="name-section">
        <p className="section-subtitle">Formación continua</p>
        <p className="section-title">Habilidades</p>
      </div>
      <div className="skills-cont">
        {dataToFill.map((element, index) => (
					<SkillsElement 
						key={index}
						icon={element.icon}
						title={element.title}
						tech={element.tech}
					/>
				))}
      </div>
    </div>
  )
}

export default Skills
