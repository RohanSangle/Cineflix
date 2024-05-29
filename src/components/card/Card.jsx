import React from 'react'
import './card.css'

import beyondearth from '../../assets/thumbnails/beyond-earth/regular/large.jpg'
import play from '../../assets/icon-play.svg'
import bookmarkempty from '../../assets/icon-bookmark-empty.svg'

const Card = () => {
  return (
    <div className='card'>
      <img className='bgimg' src={beyondearth} alt='' />

      <div className='playbutton'>
        <img className='play' src={play} alt=''/>
        <h4>Play</h4>
      </div>

      <div className='bookmark-shade'>
        <img className='bookmarkbutton' src={bookmarkempty} alt=''/>
      </div>

      <div className='subtitle'>
        <h5>2019</h5>
        <p>.</p>
        <img src='' alt=''/>
        <h5>Movie</h5>
        <p>.</p>
        <h5>PG</h5>
      </div>

      <h3 className='title'>Beyond Earth</h3>

    </div>
  )
}

export default Card