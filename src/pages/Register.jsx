import React from 'react'

const Register = () => {
  return (
    <div className='Form-Container'>
    <div className='Form-Wrapper'>
        <span className="logo">ChatX</span>
        <span className="title">Register</span>
        <form>
         <input type="text" placeholder="Display Name"/>
         <input type="email" placeholder="Email" />
         <input type="password" placeholder="Password" />
         <input type="file" />
         <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
    </div>
    </div>
  )
}

export default Register
