const Tour = ({ id, image, name, info, price }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <span>${price}</span>
      <h2>{name}</h2>
      <p>{info}</p>
      <button className='btn'>Not interested</button>
    </article>
  )
}
export default Tour
