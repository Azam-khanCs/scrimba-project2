import React from 'react'
import HeroImg from '../assets/hero-img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-wrapper container">
        <div className='hero-img'>
          <img src={HeroImg} alt="" />
        </div>
        <div className="hero-info"><h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero