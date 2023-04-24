export interface CatSummary {
  id: string
  url: string
  width: number
  height: number
}

export interface BreedFormProps {
  fetchCats: (next: string | null, breed?: string) => void
  breeds: any[]
}
