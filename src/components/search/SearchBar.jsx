import React from 'react'
import './searchbar.css'

import iconSearch from '../../assets/icon-search.svg'

const SearchBar = ({onSearch}) => {
  return (
    <div className='search'>
      <img src={iconSearch} alt=''/>
      <input  
        placeholder='Search for movies or TV series' 
        type='search' 
        name='search' 
        id='search'
        autoComplete='off'
        onChange={onSearch}
      />
    </div>
  )
}

export default SearchBar