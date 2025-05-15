import React from 'react'
import '../../styles/Projects.css'
import { useProjectElement } from '../../hooks/useProjectElement.js'
import ProjectElement from '../../components/ProjectElement/ProjectElement.jsx'

const Projects = ({ isDark }) => {
  const { reverseData } = useProjectElement()

  return (
    <div className="section">
      <div className="name-section">
        <p className="section-subtitle">Lo más reciente</p>
        <p className="section-title">Proyectos</p>
      </div>
      <div className="projects-cont">
					{reverseData.map((element, index) => (
							<ProjectElement
								key={index}
								image={element.image}
								title={element.title}
								description={element.description}
								technologies={element.technologies}
								github={element.github}
								githubOnclick={element.githubOnclik}
								link={element.link}
								linkOnclick={element.linkOnclick}
								isDark={isDark}
							/>
					))}
      </div>
    </div>
  )
}

export default Projects
