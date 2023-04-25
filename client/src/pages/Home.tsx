import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import BreedForm from '../components/BreedForm'
import { ALERT_MESSAGE } from '../constants'
import CatPhoto from '../components/CatPhoto'
import CatsContext from '../context'
import PageShell from '../components/PageShell'
import _axios from '../config/axios'

const Boxed = styled.div`
  max-width: 600px;
  margin: 2rem auto 2rem auto;
`

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
        <h1 className='text-center'>Welcome!</h1>
        <Boxed>
          <BreedForm onSelect={fetchCatsByBreed} />
        </Boxed>
        <div>
          <ul className='row'>
            {catsState.cats.map((cat) => (
              <CatPhoto key={cat.id} cat={cat} />
            ))}
          </ul>
          {catsState.nextBatchUrl && (
            <div className='text-center pt-5'>
              <Button
                type='button'
                onClick={() =>
                  fetchCats(
                    catsState.nextBatchUrl,
                    catsState.selectedBreed,
                    true
                  )
                }
                disabled={loading}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  )
}

export default HomePage
