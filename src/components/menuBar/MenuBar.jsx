import React from 'react'
import './menubar.css'

import {useNavigate} from "react-router-dom";
import { doSignOut } from '../../firebase/auth';

import logo from '../../assets/logo.svg'
import iconNavHome from '../../assets/icon-nav-home.svg'
import iconNavMovies from '../../assets/icon-nav-movies.svg'
import iconNavTVSeries from '../../assets/icon-nav-tv-series.svg'
import iconNavBookmark from '../../assets/icon-nav-bookmark.svg'
import imageAvatar from '../../assets/image-avatar.png'


const MenuBar = () => {

  const navigate = useNavigate();
  
  const gotomain = () =>{
    navigate('/main');
  }
  const gotomovies = () =>{
    navigate('/movies');
  }
  const gototvseries = () =>{
    navigate('/tvseries');
  }
  const gotobookmarks = () =>{
    navigate('/bookmarks');
  }

  return (
    <div className='menu-bar'>
      <img className='logo2' src={logo} alt=''/>

      <div className='list'>
        <img onClick={gotomain} src={iconNavHome} alt=""/>
        <img onClick={gotomovies} src={iconNavMovies} alt=""/>
        <img onClick={gototvseries} src={iconNavTVSeries} alt=""/>
        <img onClick={gotobookmarks} src={iconNavBookmark} alt=""/>
      </div>

      <div className='user-avatar'>
        <img src={imageAvatar} alt=""/>
        <button className='logout-button' onClick={()=>{doSignOut().then(()=>{navigate('/')})}}>Logout</button>
      </div>
    </div>
  )
}

export default MenuBar