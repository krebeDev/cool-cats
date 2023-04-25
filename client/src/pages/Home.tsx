import * as React from 'react'
import BreedForm from '../components/BreedForm'
import { ALERT_MESSAGE } from '../constants'
import CatPhoto from '../components/CatPhoto'
import CatsContext from '../context'
import PageShell from '../components/PageShell'
import _axios from '../config/axios'

const HomePage = (): JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string>('')

  const { catsState, saveCats, saveCatsBreeds } = React.useContext(CatsContext)

  const fetchCats = async (
    next: string | null,
    breed: string = '',
    sync: boolean = false
  ): Promise<void> => {
    const apiEndpoint = sync ? next : breed ? `/breeds/${breed}` : `/`

    try {
      const { data } = await _axios.get(apiEndpoint as string)
      saveCats(data.result, breed, data.next, sync)
    } catch (error) {
      throw error
    }
  }

  const fetchCatsBreeds = async (): Promise<void> => {
    try {
      const { data } = await _axios.get(`/breeds`)
      saveCatsBreeds(data)
    } catch (error) {
      throw error
    }
  }

  const initPage = async () => {
    try {
      if (
        !catsState.cats.length ||
        catsState.selectedBreed !== catsState.loadedBreed
      ) {
        await fetchCats(null, catsState.selectedBreed)
      }

      if (!catsState.catBreeds.length) {
        await fetchCatsBreeds()
      }
    } catch (error) {
      setError(ALERT_MESSAGE)
    } finally {
      setLoading(false)
    }
  }

  const fetchCatsByBreed = async (breed: string): Promise<void> => {
    try {
      setLoading(true)
      await fetchCats(null, breed)
    } catch (error) {
      setError(ALERT_MESSAGE)
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
    <PageShell loading={loading} error={error}>
      <section>
        <h1>Welcome to the home of cool cats!</h1>
        <BreedForm onSelect={fetchCatsByBreed} />
        <div>
          <ul className='row'>
            {catsState.cats.map((cat) => (
              <CatPhoto key={cat.id} cat={cat} />
            ))}
          </ul>
          {catsState.nextBatchUrl && (
            <div>
              <button
                type='button'
                onClick={() => fetchCats(catsState.nextBatchUrl, '', true)}
                disabled={loading}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  )
}

export default HomePage
