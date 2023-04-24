import * as React from 'react'
import { CatSummary } from './../types/index.type'

const CatPhoto = ({ cat }: CatSummary): JSX.Element => {
  return (
    <li>
      <img src={cat.ur} alt={`cat-id:${cat.id}`} />
    </li>
  )
}

export default CatPhoto
