import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <div>Hello about!</div>,
  },
])
