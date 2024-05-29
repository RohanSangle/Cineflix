import React from 'react'
import './home.css'

import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const gotoauth = () => {
    navigate('/login');
  }

  return (
    <div>
      <h1>Cineflix</h1>
      <h2>Watch latest movies, TV shows and more</h2>
      <button onClick={gotoauth}>Sign In</button>
    </div>
  )
}

export default Home