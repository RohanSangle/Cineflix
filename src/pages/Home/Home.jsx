import React from 'react'
import './home.css'
import homebackground from '../../assets/home-background-creed.jpg'

import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const gotoauth = () => {
    navigate('/login');
  }

  return (
    <div>
      <img className='homebg' src={homebackground} alt=''/>
      <h1>Cineflix</h1>
      <h2 className='miniheader' >Watch latest movies, TV shows and more</h2>
      <button onClick={gotoauth}>Sign In</button>
    </div>
  )
}

export default Home