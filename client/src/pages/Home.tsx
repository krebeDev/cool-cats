import * as React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import BreedForm from '../components/BreedForm'
import { BASE_API_URL } from '../constants'
import { CatSummary } from './../types/index.type'
import CatPhoto from '../components/CatPhoto'

const HomePage = (): JSX.Element => {
  const [cats, setCats] = React.useState<CatSummary[] | []>([])
  const [catBreeds, setCatBreeds] = React.useState<any[]>([])
  const [nextBatchUrl, setNextBatchUrl] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const [errors, setErrors] = React.useState<string>('')

  const location = useLocation()

  const fetchCats = async (
    next: string | null,
    breed?: string | null,
    sync: boolean = false
  ): Promise<void> => {
    const apiEndpoint =
      next && !breed
        ? next
        : breed
        ? `${BASE_API_URL}/breeds/${breed}`
        : `${BASE_API_URL}`

    try {
      const { data } = await axios.get(apiEndpoint)
      // TODO: Filter off duplicates
      setCats((cats) => (sync ? [...cats, ...data.result] : data.result))
      setNextBatchUrl(data.next)
      // Handle end of results case
    } catch (error) {
      throw error
    }
  }

  const fetchCatsBreeds = async (): Promise<void> => {
    try {
      const { data } = await axios.get(`${BASE_API_URL}/breeds`)
      setCatBreeds(data)
    } catch (error) {
      throw error
    }
  }

  const initPage = async () => {
    const breed = location.state?.breed // change to context
    try {
      await fetchCats(null, breed)
      await fetchCatsBreeds()
    } catch (error) {
      setErrors('An unexpected error occured.')
    } finally {
      setLoading(false)
    }
  }

  const fetchCatsByBreed = async (breed: string): Promise<void> => {
    try {
      setLoading(true)
      await fetchCats(null, breed)
    } catch (error) {
      setErrors('An unexpected error occured.')
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    ;(async () => {
      initPage()
    })()
  }, [])

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !errors && (
        <section>
          <h1>Welcome to the home of cool cats!</h1>
          <BreedForm onSelect={fetchCatsByBreed} breeds={catBreeds} />
          <div>
            <ul className='row'>
              {cats.map((cat) => (
                <CatPhoto key={cat.id} cat={cat} />
              ))}
            </ul>
            {nextBatchUrl && (
              <div>
                <button
                  type='button'
                  onClick={() => fetchCats(nextBatchUrl, null, true)}
                  disabled={loading}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      )}
      {errors && <p>{errors}</p>}
    </>
  )
}

export default HomePage
