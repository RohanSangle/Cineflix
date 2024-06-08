import React, { useState } from 'react'
import './card.css'

import play from '../../assets/icon-play.svg'
import bookmarkempty from '../../assets/icon-bookmark-empty.svg'
import bookmarkfull from '../../assets/icon-bookmark-full.svg'
import moviecategory from '../../assets/icon-category-movie.svg'
import tvcategory from '../../assets/icon-category-tv.svg'

const Card = (props) => {

  const [marked, setMarked] = useState(props.isBookmarked);

  const togglemarked = () =>{
    setMarked(!marked);
  }

  const imagePath = props.isTrending ? props.thumbnail.regular.large : props.thumbnail.regular.medium;

  return (
    <div className={`${props.isTrending ? 'trending-card' : 'card'}`}>
      <img className='bgimg' src={require(`../../assets/${imagePath}`)} alt='' />

      <div className='playbutton'>
        <img className='play' src={play} alt=''/>
        <h4>Play</h4>
      </div>

      <div className='bookmark-shade'>
        <img className='bookmarkbutton' src={marked ? bookmarkfull : bookmarkempty} alt='' onClick={togglemarked}/>
      </div>

      <div className='subtitle'>
        <h5>{props.year}</h5>
        <p>.</p>
        <img className='categoryicon' src={props.category === 'Movie' ?  moviecategory : tvcategory} alt=''/>
        <h5>{props.category}</h5>
        <p>.</p>
        <h5>{props.rating}</h5>
      </div>

      <h3 className='title'>{props.title}</h3>

    </div>
  )
}

export default Card