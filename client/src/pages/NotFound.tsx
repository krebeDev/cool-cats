import * as React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (): JSX.Element => {
  return (
    <section>
      <h1>Oops!</h1>
      <p>
        No cat is here. <br /> An unexpected error has occurred.
      </p>
      <Link to='/'>Go Home 🏠</Link>
    </section>
  )
}

export default NotFound
