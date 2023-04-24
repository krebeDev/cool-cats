export interface CatSummary {
  id: string
  url: string
  width: number
  height: number
}

export interface BreedFormProps {
  onSelect: (breed: string) => void
  breeds: any[]
}
