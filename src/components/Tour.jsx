const Tour = ({ id, image, name, info, price, removeTour }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button onClick={() => removeTour(id)} className='btn'>
        Not interested
      </button>
    </article>
  )
}
export default Tour
