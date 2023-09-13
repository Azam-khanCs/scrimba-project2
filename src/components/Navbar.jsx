import React from 'react'
import Logo from '../assets/Vector.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav container">
        <div className="brand">
          <img src={Logo} alt="Airbnb logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar