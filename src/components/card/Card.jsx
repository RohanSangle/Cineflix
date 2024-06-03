import React from 'react'
import './card.css'

// import beyondearth from '../../assets/thumbnails/beyond-earth/regular/large.jpg'
import play from '../../assets/icon-play.svg'
import bookmarkempty from '../../assets/icon-bookmark-empty.svg'
import moviecategory from '../../assets/icon-category-movie.svg'
import tvcategory from '../../assets/icon-category-tv.svg'

const Card = (props) => {
  return (
    <div className='card'>
      <img className='bgimg' src={require(`../../assets/${props.thumbnail.regular.medium}`)} alt='' />

      <div className='playbutton'>
        <img className='play' src={play} alt=''/>
        <h4>Play</h4>
      </div>

      <div className='bookmark-shade'>
        <img className='bookmarkbutton' src={bookmarkempty} alt=''/>
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