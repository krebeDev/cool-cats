import * as React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { BASE_API_URL } from '../constants'
import CatDetails from '../components/CatDetails'
import { Link } from 'react-router-dom'

const CatDetailsPage = (): JSX.Element => {
  const [catDetails, setCatDetails] = React.useState<any>({})
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string>('')

  const location = useLocation()
  const catId = location.pathname.split('/').pop()

  React.useEffect(() => {
    const fetchCatsBreeds = async (): Promise<void> => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/cat/${catId}`)
        setCatDetails(data)
      } catch (error) {
        setError('An unexpected error occured.')
      } finally {
        setLoading(false)
      }
    }

    fetchCatsBreeds()
  }, [])

  const catBreed = catDetails?.breeds ? catDetails.breeds[0].id : null

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !error && (
        <section>
          <div>
            <Link to='/' state={{ breed: catBreed }}>
              ← Back
            </Link>
          </div>
          <CatDetails cat={catDetails} />
        </section>
      )}
      {error && <p>{error}</p>}
    </>
  )
}

export default CatDetailsPage
