import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFound'
import CatDetailsPage from './pages/Cat'
import HomePage from './pages/Home'

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      // TODO: Add errorElement prop
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
    // Add App Context here
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
