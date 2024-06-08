import React,{useState} from 'react'
import './bookmarks.css'
import MenuBar from '../../components/menuBar/MenuBar'
import SearchBar from '../../components/search/SearchBar'
import Card from '../../components/card/Card'
import data from '../../data.json'

const Bookmarks = () => {

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
            {filteredData.filter(item => item.isBookmarked).map((noteItem)=>(
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
                isBookmarked={noteItem.isBookmarked}
    
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Bookmarks