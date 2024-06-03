import React,  { useState }  from 'react'
import './register.css'

import logo from '../../../assets/logo.svg';

import { Navigate, Link } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')

  const { userLoggedIn } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isRegistering) {
      setIsRegistering(true)
      await doCreateUserWithEmailAndPassword(email, password)
    }
  }


  return (
    <div className="login-page">
      {userLoggedIn && (<Navigate to={'/login'} replace={true} />)}

      <img className='logo3' src={logo} alt="" />
      <div className='form-wrapper2'>
        <h2 className='form-title'>Sign up</h2>
        <form className='form' onSubmit={onSubmit}>
          <div className='input-wrapper2'>
            <input
              placeholder='Email address'
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value)}}
            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className='input-wrapper2'>
            <input
              disabled={isRegistering}
              placeholder='Password'
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </div>
          <div className='input-wrapper2'>
            <input
              disabled={isRegistering}
              placeholder='Repeat password'
              type="password"
              name="password2"
              required
              value={confirmPassword}
              onChange={(e) => { setconfirmPassword(e.target.value) }}
            />
            {/* {errors.password2 && <span className="error">{errors.password2}</span>} */}
          </div>
          <button className='submit-button2' type="submit" disabled={isRegistering}>Sign Up</button>
          <p className="login-hint">Already have an account?<Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register