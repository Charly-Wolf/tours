import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const removeTour = id => {
    const newTours = tours.filter(t => t.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setTours(data)
      setIsError(false)
    } catch (error) {
      console.log(error)
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading)
    return (
      <main>
        <Loading />
      </main>
    )
  if (isError)
    return (
      <main>
        <h1>Error</h1>
      </main>
    )

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}
export default App
