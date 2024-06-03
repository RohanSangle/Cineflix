import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {Route} from 'react-router';
import { AuthProvider } from './contexts/authContext/index.jsx';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Auth/login/Loginn.jsx';
import Register from './pages/Auth/register/Register.jsx';
import Main from './pages/Main/Main.jsx';
import Movies from './pages/Movies/Movies.jsx';
import TvSeries from './pages/TvSeries/TvSeries.jsx';
import Bookmarks from './pages/Bookmarks/Bookmarks.jsx';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path='/main' exact element={<Main/>}/>
        <Route path='/movies' exact element={<Movies/>}/>
        <Route path='/tvseries' exact element={<TvSeries/>}/>
        <Route path='/bookmarks' exact element={<Bookmarks/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App