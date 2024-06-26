import Tour from './Tour'

const Tours = ({ tours }) => {
  return (
    <article>
      {tours.map(t => (
        <Tour {...t} />
      ))}
    </article>
  )
}
export default Tours
