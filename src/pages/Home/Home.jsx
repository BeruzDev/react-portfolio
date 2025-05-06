import React from 'react'
import '../../styles/Home.css'
import ProfileImg from '../../assets/Images/Albert/profile-img.png'

const Home = () => {
  return (
    <div className="home-cont">
      <div className="profile">
        <img src={ProfileImg} className="profile-img" alt="profile-img" />
      </div>
      <div className="sumary">
				<h3>hola</h3>
				<h1>soy albert castro</h1>
			</div>
    </div>
  )
}

export default Home
