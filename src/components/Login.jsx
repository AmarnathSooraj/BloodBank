import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Image from '../assets/aboutImg.png'
import google from '../assets/google logo.png'
function Login() {
  return (
    <div className='login-container'>
        <img className='login-img' src={Image} alt="img" />
      <div className='login-form'>
        <div className="one">
        <p><span className='create'>Create your account</span> to continue to blood donation</p>
        <button className='login-google'>
            <img src={google}/>
            Continue with Google
            </button>
        </div>
          <div><hr /></div>
          <div className="two">
            <label>Email address</label>
            <input type="email" />
            <label>Password</label>
            <input type="password"/>
            <button>Login</button>
            <p>Have n't an account? <Link className='in' to='/signup'>Sign up</Link></p>
          </div>
      </div>
    </div>
  )
}

export default Login
