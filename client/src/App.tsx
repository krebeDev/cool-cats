import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Cat from './pages/Cat'
import Home from './pages/Home'

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      // TODO: Add errorElement prop
    },
    {
      path: 'cats/:catId',
      element: <Cat />,
    },
    {
      path: '*',
      element: <NotFound />,
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
