import * as React from 'react'
import { BreedFormProps } from './../types/index.type'

const BreedForm = ({ onSelect, breeds }: BreedFormProps): JSX.Element => {
  const [breed, setBreed] = React.useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = e.target
    setBreed(value)
    onSelect(value)
  }

  return (
    <form>
      <label htmlFor='breed'>Cat Breed:</label>
      <select name='breed' id='breed' onChange={handleChange} value={breed}>
        <option value='' disabled={true}>
          Please select
        </option>
        {breeds.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </select>
    </form>
  )
}

export default BreedForm
