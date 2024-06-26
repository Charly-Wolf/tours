import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>On Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map(t => (
          <Tour key={t.id} {...t} />
        ))}
      </div>
    </section>
  )
}
export default Tours
