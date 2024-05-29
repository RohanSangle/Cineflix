import React from 'react'
import './main.css'

import MenuBar from '../../components/menuBar/MenuBar.jsx'
import SearchBar from '../../components/search/SearchBar.jsx'
import Card from '../../components/card/Card.jsx'
import data from '../../data.json'

const Main = () => {
  return (
    <>
      <MenuBar/>
      <SearchBar/>
      {/* <h2>Trending</h2> */}
      <h2>Recommended for you</h2>
      <div className='card-background'>
        {data.map((noteItem)=>(
          <Card
            key={noteItem.id}
            thumbnail={noteItem.thumbnail}
            title={noteItem.title}
            year={noteItem.year}
            category={noteItem.category}
            rating={noteItem.rating}

          />
        ))}
      </div>
    </>
  )
}

export default Main