const Tour = ({ id, image, name, info, price }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
      <button className='btn'>Not interested</button>
    </article>
  )
}
export default Tour
