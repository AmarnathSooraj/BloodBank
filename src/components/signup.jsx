import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import google from '../assets/google logo.png'

function signup() {
  return (
    <div className='signup-container'>
              <div className="sig1">
                <p><span>Create your account</span> to continue to blood donation</p>
                <button><img src={google}/>Sign up with Google </button>
              </div>
      <div className='sig2'>
        <div className='signup'>
          <label htmlFor="name">First Name</label>
          <input type='text'/>
          <label htmlFor="">Last Name</label>
          <input type='text'/>
          <label htmlFor="dob">DOB</label>
          <input type='date'/>
          <label htmlFor="tel">Phone number</label>
          <input type="tel"/>
          <label htmlFor="email">E-mail</label>
          <input type="email"/>
          <label htmlFor="password">Password</label>
          <input type='password'/>
          <label htmlFor="re-password">Re-enter Password</label>
          <input type='password'/>
        </div>
        <button>Sign-up</button>
      </div>
    </div>
  )
}

export default signup
