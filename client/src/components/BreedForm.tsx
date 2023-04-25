import * as React from 'react'
import { BreedFormProps } from './../types/index.type'
import CatsContext from '../context'

const BreedForm = ({ onSelect }: BreedFormProps): JSX.Element => {
  const { catsState, saveSelectedBreed } = React.useContext(CatsContext)
  const [breed, setBreed] = React.useState<string>(catsState.selectedBreed)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target
    setBreed(value)
    saveSelectedBreed(value)
    onSelect(value)
  }

  return (
    <form>
      <label htmlFor='breed'>Cat Breed:</label>
      <select name='breed' id='breed' onChange={handleChange} value={breed}>
        <option value='' disabled={true}>
          Please select
        </option>
        {catsState.catBreeds.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </form>
  )
}

export default BreedForm
