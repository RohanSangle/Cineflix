import React,{useState} from 'react'
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
  const [selected, setSelected] = useState('home');

  const handleNavigation = (path, name) => {
    navigate(path);
    setSelected(name);
  };

  return (
    <div className='menu-bar'>
      <img className='logo2' src={logo} alt=''/>

      <div className='list'>
        <img className={selected === 'movies' ? 'selected' : ''} onClick={() => handleNavigation('/main', 'home')} src={iconNavHome} alt=""/>
        <img className={selected === 'movies' ? 'selected' : ''} onClick={() => handleNavigation('/main/movies', 'movies')} src={iconNavMovies} alt=""/>
        <img className={selected === 'movies' ? 'selected' : ''} onClick={() => handleNavigation('/main/tvseries', 'tvseries')} src={iconNavTVSeries} alt=""/>
        <img className={selected === 'movies' ? 'selected' : ''} onClick={() => handleNavigation('/main/bookmarks', 'bookmarks')} src={iconNavBookmark} alt=""/>
      </div>

      <div className='user-avatar'>
        <img src={imageAvatar} alt=""/>
        <button className='logout-button' onClick={()=>{doSignOut().then(()=>{navigate('/')})}}>Logout</button>
      </div>
    </div>
  )
}

export default MenuBar