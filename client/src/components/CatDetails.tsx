import * as React from 'react'

const CatDetails = ({ cat }: any): JSX.Element => {
  const { breeds, url, id } = cat

  return (
    <div>
      <div>
        <img src={url} alt={`Cat-${id}`} />
      </div>
      <div>
        <h1>
          <span>Breed: </span>
          {breeds && <span>{breeds[0].name}</span>}
        </h1>
        <p>
          <span>Origin: </span>
          {breeds && <span>{breeds[0].origin}</span>}
        </p>
        <p>
          <span>Temperament: </span>
          {breeds && <span>{breeds[0].temperament}</span>}
        </p>
        <p>
          <span>Description: </span>
          {breeds && <span>{breeds[0].description}</span>}
        </p>
      </div>
    </div>
  )
}

export default CatDetails
