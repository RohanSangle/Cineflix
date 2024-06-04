import React from 'react'
import './movies.css'
import MenuBar from '../../components/menuBar/MenuBar'
import SearchBar from '../../components/search/SearchBar'
import Card from '../../components/card/Card'
import data from '../../data.json'

const Movies = () => {
  return (
    <>
      <MenuBar/>
      <SearchBar/>
      <h2 className='trendingtitle'>Movies</h2>

      <div className='movies-card-background'>
        {data.filter(item => item.category === 'Movie').map((noteItem)=>(
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

export default Movies