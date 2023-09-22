import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import ServicesPage from '../pages/services/ServicesPage'
import MyRoot from '../pages/services/Root'

import ErrorPage from '../pages/ErrorPage'

import MyWebsites from '../pages/services/websites/index'
import MyDesign from '../pages/services/design/index'
import MyDevelopment from '../pages/services/development/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    handle: {
      crumb: () => 'На главную',
    },
  },
  {
    path: '/services',
    element: <MyRoot />,
    handle: {
      crumb: () => 'Услуги',
    },
    children: [
      {
        path: 'websites',
        element: <MyWebsites />,
        handle: {
          crumb: () => 'Сайты',
        },
      },
      {
        path: 'design',
        element: <MyDesign />,
      },
      {
        path: 'development',
        element: <MyDevelopment />,
      },
    ],
  },
  {
    path: '/ServicesPage',
    element: <ServicesPage />,
    handle: {
      crumb: () => 'Страница услуг',
    },
  },
])
