import React from 'react'
import './login.css'

import logo from '../../../assets/logo.svg';

import {Link} from 'react-router-dom';

const Loginn = () => {
  return (
    <div className="login-page">
      <img className='logo3' src={logo} alt=""/>
      <div className='form-wrapper'>
        <h2 className='form-title'>Login</h2>
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
          <button className='submit-button' type="submit">Login</button>
          <p className="login-hint">Don't have an account?<Link to='/register'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Loginn