import React from 'react'

import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
          <img src='https://levitation.in/wp-content/uploads/2023/04/levitation-Infotech.png'/>
          <div className="btns">
              <button className='free-trial'>Start free Trial</button>
              <button className='navbar-login'>Login</button>
          </div>
    </div>
  )
}

export default Navbar
