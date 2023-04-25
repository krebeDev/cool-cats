import React from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { ALERT_MESSAGE, BASE_API_URL } from '../constants'
import CatDetails from '../components/CatDetails'
import { Link } from 'react-router-dom'
import CatsContext from '../context'
import PageShell from '../components/PageShell'

const CatDetailsPage = (): JSX.Element => {
  const [catDetails, setCatDetails] = React.useState<any>({})
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string>('')

  const location = useLocation()
  const catId = location.pathname.split('/').pop()
  const { saveSelectedBreed } = React.useContext(CatsContext)

  React.useEffect(() => {
    const fetchCatsBreeds = async (): Promise<void> => {
      try {
        const { data } = await axios.get(`${BASE_API_URL}/cat/${catId}`)
        setCatDetails(data)
        const catBreed = data?.breeds ? data.breeds[0].id : ''
        saveSelectedBreed(catBreed)
      } catch (error) {
        setError(ALERT_MESSAGE)
      } finally {
        setLoading(false)
      }
    }

    fetchCatsBreeds()
  }, [saveSelectedBreed, catId])

  return (
    <PageShell loading={loading} error={error}>
      <section>
        <div className='my-3'>
          <Link to='/'>← Back</Link>
        </div>
        <CatDetails cat={catDetails} />
      </section>
    </PageShell>
  )
}

export default CatDetailsPage
