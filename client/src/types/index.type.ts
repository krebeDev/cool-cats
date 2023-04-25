export interface CatSummary {
  id: string
  url: string
  width: number
  height: number
}

export interface BreedFormProps {
  onSelect: (breed: string) => void
}

export interface CatXContextType {
  cats: CatSummary[] | []
  nextBatchUrl: string | null
  catBreeds: any[]
  selectedBreed: string
  loadedBreed: string
}

export interface CatsContextType {
  catsState: CatXContextType
  saveCats: (
    cats: CatSummary[],
    breed: string,
    nextBatch: string | null,
    sync: boolean
  ) => void
  saveCatsBreeds: (breeds: any[]) => void
  saveSelectedBreed: (breed: string) => void
}

export interface PageShellProps {
  loading: boolean
  error?: string
  children: React.ReactNode
}
