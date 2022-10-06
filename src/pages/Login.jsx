import React from 'react'
const Login = () => {
  return (
    <div className='Form-Container'>
    <div className='Form-Wrapper'>
        <span className="logo">ChatX</span>
        <span className="title">LogIn</span>
        <form>
         <input type="email" placeholder="Email" />
         <input type="password" placeholder="Password" />
         <button>Log in</button>
        </form>
        <p>You don't have an account? Register</p>
    </div>
    </div>
  )
}

export default Login
