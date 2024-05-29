import React from 'react'
import './register.css'

import logo from '../../../assets/logo.svg';

import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-page">
      <img src={logo} alt="" />
      <div className='form-wrapper'>
        <h2 className='form-title'>Sign up</h2>
        <form className='form'>
          <div className='input-wrapper'>
            <input
              placeholder='Email address'
              type="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className='input-wrapper'>
            <input
              placeholder='Password'
              type="password"
              name="password"
            //   value={formData.password}
            //   onChange={handleChange}
            />
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </div>
          <div className='input-wrapper'>
            <input
              placeholder='Repeat password'
              type="password"
              name="password2"
            //   value={formData.password2}
            //   onChange={handleChange}
            />
            {/* {errors.password2 && <span className="error">{errors.password2}</span>} */}
          </div>
          <button className='submit-button' type="submit">Create an account</button>
          <p className="login-hint">Already have an account?<Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register