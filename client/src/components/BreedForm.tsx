import React from 'react'
import { BreedFormProps } from './../types/index.type'
import CatsContext from '../context'
import { Form } from 'react-bootstrap'

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
    <Form.Select
      onChange={handleChange}
      value={breed}
      aria-label='Cat Breed'
      size='lg'
    >
      <option value='' disabled={true}>
        Select cat breed
      </option>
      {catsState.catBreeds.map(({ id, name }) => (
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </Form.Select>
  )
}

export default BreedForm
