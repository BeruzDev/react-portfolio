import React from 'react'
import '../../styles/Projects.css'
import { useProjectElement } from '../../hooks/useProjectElement.js'

const Projects = () => {
  const { dataToFill } = useProjectElement()

  return (
    <div className="section">
      <div className="name-section">
        <p className="section-subtitle">Lo más reciente</p>
        <p className="section-title">Proyectos</p>
      </div>
      <div className="projects-cont"></div>
    </div>
  )
}

export default Projects
