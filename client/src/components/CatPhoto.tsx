import * as React from 'react'
import { Link } from 'react-router-dom'
import { CatSummary } from './../types/index.type'

interface CatPhotoProp {
  cat: CatSummary
}

const CatPhoto = ({ cat }: CatPhotoProp): JSX.Element => {
  return (
    <li className='col-lg-4'>
      <Link to={`/cats/${cat.id}`}>
        <img src={cat.url} alt={`Cat-${cat.id}`} width={200} height='auto' />
        <span>View Details</span>
      </Link>
    </li>
  )
}

export default CatPhoto
