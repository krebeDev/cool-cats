import * as React from 'react'
import { BreedFormProps } from './../types/index.type'

const activeBreed = '' // move to context

const BreedForm = ({ fetchCats, breeds }: BreedFormProps): JSX.Element => {
  const [breed, setBreed] = React.useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setBreed(e.target.value)
  }

  React.useEffect(() => {
    setBreed(activeBreed)
  }, [])

  React.useEffect(() => {
    ;(async () => {
      await fetchCats(null, breed)
    })()
  }, [breed])

  return (
    <form>
      <label htmlFor='breed'>Cat Breed:</label>
      <select name='breed' id='breed' onChange={handleChange} value={breed}>
        <option value='' disabled={true}>
          Please select
        </option>
        {breeds.map(({ id, name }) => (
          <option value={id}>{name}</option>
        ))}
      </select>
    </form>
  )
}

export default BreedForm
