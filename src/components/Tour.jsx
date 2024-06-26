import { useState } from 'react'

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          type='button'
          className='info-btn'
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? 'Show less' : 'Show more'}
        </button>
      </div>
      <button
        onClick={() => removeTour(id)}
        className='btn btn-block delete-btn'
      >
        Not interested
      </button>
    </article>
  )
}
export default Tour
