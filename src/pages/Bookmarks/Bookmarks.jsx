import React from 'react'
import './bookmarks.css'
import MenuBar from '../../components/menuBar/MenuBar'
import SearchBar from '../../components/search/SearchBar'
import Card from '../../components/card/Card'
import data from '../../data.json'

const Bookmarks = () => {
  return (
    <>
      <MenuBar/>
      <SearchBar/>
      <h2 className='trendingtitle'>Bookmarks</h2>

      <div className='bookmarks-card-background'>
        {data.filter(item => item.isBookmarked).map((noteItem)=>(
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

export default Bookmarks