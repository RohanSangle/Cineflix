import React from 'react'
import './main.css'

import MenuBar from '../../components/menuBar/MenuBar.jsx'
import SearchBar from '../../components/search/SearchBar.jsx'
import Card from '../../components/card/Card.jsx'

const Main = () => {
  return (
    <>
      <MenuBar/>
      <SearchBar/>
      {/* <h2>Trending</h2> */}
      <h2>Recommended for you</h2>
      <div className='card-background'>
        <Card/>
      </div>
    </>
  )
}

export default Main