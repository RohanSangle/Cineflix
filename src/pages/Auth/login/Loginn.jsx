import React, { useState } from 'react'
import './login.css'

import logo from '../../../assets/logo.svg';

import {Link, Navigate} from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../../../firebase/auth'; 
import {useAuth} from '../../../contexts/authContext/index.jsx';

const Loginn = () => {

  const {userLoggedIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
    if(!isSigningIn){
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email, password)
    }
  }

  if(userLoggedIn){
    return <Navigate to="/main" replace={true} />
  }


  return (
    <div className="login-page">
      {/* {userLoggedIn && (<Navigate to={'/main'} replace={true}/>)} */}

      <img className='logo3' src={logo} alt=""/>
      <div className='form-wrapper'>
        <h2 className='form-title'>Login</h2>
        <form className='form' onSubmit={onSubmit}>
          <div className='input-wrapper'>
            <input
              placeholder='Email address'
              type="email"
              name="email"
              required
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}

            />
            {/* {errors.email && <span className="error">{errors.email}</span>} */}
          </div>
          <div className='input-wrapper'>
            <input
              placeholder='Password'
              type="password"
              name="password"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}

            />
            {/* {errors.password && <span className="error">{errors.password}</span>} */}
          </div>
          <button className='submit-button' type="submit" disabled={isSigningIn}>Login</button>
          <p className="login-hint">Don't have an account?<Link to='/register'>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Loginn