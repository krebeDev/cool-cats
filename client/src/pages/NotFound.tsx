import { Link } from 'react-router-dom'

const NotFoundPage = (): JSX.Element => {
  return (
    <section className='text-center py-5'>
      <h1>Aww, snap!</h1>
      <p>
        No cat is here. <br /> An unexpected error has occurred.
      </p>
      <Link to='/'>🏠 Go Home</Link>
    </section>
  )
}

export default NotFoundPage
