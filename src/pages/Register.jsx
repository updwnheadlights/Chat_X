import React from 'react'
import Add from "../img/pfp-select.png"
const Register = () => {
  return (
    <div className='Form-Container'>
    <div className='Form-Wrapper'>
        <span className="logo">ChatX</span>
        <span className="title">Register</span>
        <form>
         <input type="text" placeholder="User Name"/>
         <input type="email" placeholder="Email" />
         <input type="password" placeholder="Password" />
         <input style = {{display:"none"}} type="file" id='file' />
         <label htmlFor="file"><img src={Add} alt='pfp'/>
         <span>Add profile picture</span>
         </label>
         <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
    </div>
    </div>
  )
}

export default Register
