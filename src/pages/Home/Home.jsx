import React from 'react'
import '../../styles/Home.css'
import ProfileImg from '../../assets/Images/Albert/profile-img.png'
// import {Github, Linkedin} from 'lucide-react'
import GithubIconDark from '../../assets/Icons/Logos/GitHub_dark.svg?react'
import GithubIconLight from '../../assets/Icons/Logos/GitHub_light.svg?react'
import LinkedinIcon from '../../assets/Icons/Logos/linkedin.svg?react'



const Home = ({ isDark }) => {
  return (
    <div className="home-cont">
      <div className="profile">
        <img src={ProfileImg} className="profile-img" alt="profile-img" />
      </div>
      <div className="sumary">
        <div className="text">
          <h3 className="iam"> Hola, soy</h3>
          <h1 className="name">Albert Castro</h1>
          <h2 className="developer">Desarrollador web</h2>
        </div>
        <div className="btns">
          <button
            className="cv"
            onClick={() =>
              window.open('/public/Documents/CV_Albert_Castro.pdf')
            }
          >
            Descargar CV
          </button>
          <button
            className={`contact ${isDark ? 'dark-btn' : 'ligth-btn'}`}
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contáctame
          </button>
        </div>
        <div className="rrss">
        <button
            className='rrss-btn'
            onClick={() => window.open('https://www.linkedin.com/in/albert-castro-albacete-38204615a/')}
          >
            <LinkedinIcon className='rrss-icon'/>
          </button>
          <button
            className='rrss-btn'
            onClick={() => window.open('https://github.com/BeruzDev')}
          >
            {isDark ? <GithubIconDark className='rrss-icon'/> : <GithubIconLight className='rrss-icon'/>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
