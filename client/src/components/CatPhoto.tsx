import * as React from 'react'
import { CatSummary } from './../types/index.type'

interface CatPhotoProp {
  cat: CatSummary
}

const CatPhoto = ({ cat }: CatPhotoProp): JSX.Element => {
  return (
    <li className='col-lg-4'>
      <img src={cat.url} alt={`cat-id:${cat.id}`} width={200} height='auto' />
    </li>
  )
}

export default CatPhoto
