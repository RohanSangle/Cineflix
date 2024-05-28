import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {Route} from 'react-router';

import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';
import Main from './components/Main/Main.jsx';
import Movies from './components/Movies/Movies.jsx';
import TvSeries from './components/TvSeries/TvSeries.jsx';
import Bookmarks from './components/Bookmarks/Bookmarks.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" exact element={<Auth/>}/>
        <Route path='/main' exact element={<Main/>}/>
        <Route path='/movies' exact element={<Movies/>}/>
        <Route path='/tvseries' exact element={<TvSeries/>}/>
        <Route path='/bookmarks' exact element={<Bookmarks/>}/>
      </Routes>
    </Router>
  )
}

export default App