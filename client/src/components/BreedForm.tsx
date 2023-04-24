import * as React from 'react'
import { BreedFormProps } from './../types/index.type'

const activeBreed = '' // move to context

const BreedForm = ({ onSelect, breeds }: BreedFormProps): JSX.Element => {
  const [breed, setBreed] = React.useState<string>('')

  const handleChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ): Promise<void> => {
    setBreed(e.target.value)
    await onSelect(breed)
  }

  React.useEffect(() => {
    setBreed(activeBreed)
  }, [])

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
