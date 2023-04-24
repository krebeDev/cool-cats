import * as React from 'react'
import BreedForm from '../components/BreedForm'
import axios from 'axios'
import { BASE_API_URL } from '../constants'
import { CatSummary } from './../types/index.type'
import CatPhoto from '../components/CatPhoto'

const HomePage = (): JSX.Element => {
  const [cats, setCats] = React.useState<CatSummary[] | []>([])
  const [catBreeds, setCatBreeds] = React.useState<any[]>([])
  const [nextBatchUrl, setNextBatchUrl] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const fetchCats = async (
    next: string | null,
    breed?: string
  ): Promise<void> => {
    const apiEndpoint = next
      ? next
      : breed
      ? `${BASE_API_URL}/breeds/${breed}`
      : `${BASE_API_URL}`

    try {
      const { data } = await axios.get(apiEndpoint)
      setCats((cats) => [...cats, ...data.result])
      setNextBatchUrl(data.next)
      // Handle end of results case
    } catch (error) {
      throw error
    }
  }

  const fetchCatsBreeds = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`${BASE_API_URL}/breeds`)
      setCatBreeds(data.result)
    } catch (error) {
      throw error
    }
  }

  const initPage = async () => {
    try {
      setLoading(true)
      await fetchCats(null)
      await fetchCatsBreeds()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    ;(async () => {
      await initPage()
    })()
  }, [])

  return (
    <section>
      <h1>Welcome to the home of cool cats!</h1>
      <BreedForm fetchCats={fetchCats} breeds={catBreeds} />
      <div>
        <ul>
          {cats.map((cat) => (
            <CatPhoto key={cat.id} cat={cat} />
          ))}
        </ul>
        {nextBatchUrl && (
          <div>
            <button
              type='button'
              onClick={() => fetchCats(nextBatchUrl as string)}
              disabled={loading}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default HomePage
