import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFound'
import CatDetailsPage from './pages/Cat'
import HomePage from './pages/Home'
import CatsContext from './context'
import { CatSummary, CatXContextType } from './types/index.type'

const App = (): JSX.Element => {
  const [catsState, setCatsState] = React.useState<CatXContextType>({
    cats: [],
    nextBatchUrl: null,
    catBreeds: [],
    selectedBreed: '',
    loadedBreed: '',
  })

  const saveCats = React.useCallback(
    (
      cats: CatSummary[],
      breed: string,
      nextBatch: string | null,
      sync: boolean
    ): void => {
      setCatsState((currentValue: CatXContextType) => ({
        ...currentValue,
        cats: sync ? [...currentValue.cats, ...cats] : cats,
        loadedBreed: breed,
        nextBatchUrl: nextBatch,
        // TODO: Filter off duplicates
      }))
    },
    []
  )

  const saveCatsBreeds = React.useCallback((breeds: any[]): void => {
    setCatsState((currentValue: CatXContextType) => ({
      ...currentValue,
      catBreeds: breeds,
    }))
  }, [])

  const saveSelectedBreed = React.useCallback((breed: string): void => {
    setCatsState((currentValue: CatXContextType) => ({
      ...currentValue,
      selectedBreed: breed,
    }))
  }, [])

  const contextValue = React.useMemo(
    () => ({
      catsState,
      saveCats,
      saveCatsBreeds,
      saveSelectedBreed,
    }),
    [catsState, saveCats, saveCatsBreeds, saveSelectedBreed]
  )

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'cats/:catId',
      element: <CatDetailsPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return (
    <CatsContext.Provider value={contextValue}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </CatsContext.Provider>
  )
}

export default App
