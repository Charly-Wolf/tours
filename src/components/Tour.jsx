const Tour = ({ id, image, name, info, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <span>${price}</span>
      <h2>{name}</h2>
      <p>{info}</p>
      <button className='btn'>Not interested</button>
    </div>
  )
}
export default Tour
