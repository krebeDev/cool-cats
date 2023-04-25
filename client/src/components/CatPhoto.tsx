import { Link } from 'react-router-dom'
import { CatSummary } from './../types/index.type'
import styled from 'styled-components'

const CatImage = styled.img`
  width: 370px;
  height: 370px;
  @media (min-width: 990px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 1380px) {
    width: 400px;
    height: 400px;
  }
`
// TODO: Properly crop images

interface CatPhotoProp {
  cat: CatSummary
}

const CatPhoto = ({ cat }: CatPhotoProp): JSX.Element => {
  return (
    <li className='col-lg-4 my-2'>
      <Link to={`/cats/${cat.id}`} className='d-flex flex-column text-center'>
        <CatImage
          src={cat.url}
          alt={`Cat-${cat.id}`}
          className='mx-auto mb-2 rounded border'
        />
        <span className='text-secondary'>View Details</span>
      </Link>
    </li>
  )
}

export default CatPhoto
