import React from 'react'
import './tvseries.css'
import MenuBar from '../../components/menuBar/MenuBar'
import SearchBar from '../../components/search/SearchBar'
import Card from '../../components/card/Card'
import data from '../../data.json'

const TvSeries = () => {
  return (
    <>
      <MenuBar/>
      <SearchBar/>
      <h2 className='trendingtitle'>TV Series</h2>

      <div className='tvseries-card-background'>
        {data.filter(item => item.category === 'TV Series').map((noteItem)=>(
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

export default TvSeries