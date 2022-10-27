import React from 'react'
import Add from "../img/logout.png"
const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className='logo'>ChatX</span>
      <div className='user'>
        <img src='https://pps.whatsapp.net/v/t61.24694-24/296917400_1257328201698228_387654029611050022_n.jpg?ccb=11-4&oh=01_AdT6Qw09nrzNp8-aQQBgROdL32pmUVXT_oRwpzT2x8jP9g&oe=6367B1FA' alt=' ' />
        <span>Ayush</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
