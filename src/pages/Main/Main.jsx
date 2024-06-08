import React,{useState} from 'react'
import './main.css'

import MenuBar from '../../components/menuBar/MenuBar.jsx'
import SearchBar from '../../components/search/SearchBar.jsx'
import Card from '../../components/card/Card.jsx'
import data from '../../data.json'

const Main = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <>
      <MenuBar/>
      <SearchBar onSearch={handleSearch}/>
      {searchTerm !== '' && (
        <>
          <h2 className='trendingtitle'>Found {filteredData.length} results for '{searchTerm}'</h2>
          <div className='card-background'>
            {filteredData.map((noteItem)=>(
              <Card
                key={noteItem.id}
                thumbnail={noteItem.thumbnail}
                title={noteItem.title}
                year={noteItem.year}
                category={noteItem.category}
                rating={noteItem.rating}
                isBookmarked={noteItem.isBookmarked}
    
              />
            ))}
          </div>
        </>
      )}
      {searchTerm === '' && (
        <>
          <h2 className='trendingtitle'>Trending</h2>
          <div className='trendingcontainer'>
            {data.filter(item => item.isTrending).map((noteItem)=>(
              <Card
                key={noteItem.id}
                thumbnail={noteItem.thumbnail}
                title={noteItem.title}
                year={noteItem.year}
                category={noteItem.category}
                rating={noteItem.rating}
                isBookmarked={noteItem.isBookmarked}
                isTrending={noteItem.isTrending}
    
              />
            ))}
          </div>
          <h2 className='recommendtitle'>Recommended for you</h2>
          <div className='card-background'>
            {data.map((noteItem)=>(
              <Card
                key={noteItem.id}
                thumbnail={noteItem.thumbnail}
                title={noteItem.title}
                year={noteItem.year}
                category={noteItem.category}
                rating={noteItem.rating}
                isBookmarked={noteItem.isBookmarked}
    
              />
            ))}
          </div>
        </>
        
      )}
      
    </>
  )
}

export default Main