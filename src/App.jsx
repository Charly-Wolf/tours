import { useEffect, useState } from 'react'
import Loading from './components/Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchTours = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setTours(data)
      console.log(tours)

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

  if (isLoading) return <Loading />
  if (isError) return <h1>Error</h1>

  return <h2>On Tours</h2>
}
export default App
