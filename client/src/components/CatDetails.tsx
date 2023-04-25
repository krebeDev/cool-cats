import styled from 'styled-components'

const CatImage = styled.img`
  max-width: 600px;
  height: auto;
`

const CatDetails = ({ cat }: any): JSX.Element => {
  const { breeds, url, id } = cat

  return (
    <div className='row text-center'>
      <div className='col-12'>
        <CatImage
          src={url}
          alt={`Cat-${id}`}
          className='mx-auto border rounded'
        />
      </div>
      <div className='col-12 pt-3'>
        <h1>
          <strong className='text-secondary'>Breed: </strong>
          {breeds && <span>{breeds[0].name}</span>}
        </h1>
        <p>
          <strong className='text-secondary'>Origin: </strong>
          {breeds && <span>{breeds[0].origin}</span>}
        </p>
        <p>
          <strong className='text-secondary'>Temperament: </strong>
          {breeds && <span>{breeds[0].temperament}</span>}
        </p>
        <p>
          <strong className='text-secondary'>Description: </strong>
          {breeds && <span>{breeds[0].description}</span>}
        </p>
      </div>
    </div>
  )
}

export default CatDetails
