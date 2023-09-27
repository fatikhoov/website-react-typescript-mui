import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import ServicesPage from '../pages/services/ServicesPage'

import ErrorPage from '../pages/ErrorPage'

import MyWebsites from '../pages/services/websites/index'
import MyDesign from '../pages/services/design/index'
import MyDevelopment from '../pages/services/development/index'
import LandingPage from '../pages/services/websites/landing'
import EcommercePage from '../pages/services/websites/ecommerce'
import BussinessPage from '../pages/services/websites/bussiness'

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
    element: <ServicesPage />,
    handle: {
      crumb: () => 'Услуги',
    },
    /* children: [
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
    ], */
  },
  {
    path: '/services/websites',
    element: <MyWebsites />,
    children: [
      {
        path: 'landing',
        element: <LandingPage />,
      },
      {
        path: 'ecommerce',
        element: <EcommercePage />,
      },
      {
        path: 'bussiness',
        element: <BussinessPage />,
      },
    ],
  },
  {
    path: '/services/design',
    element: <MyDesign />,
  },
  {
    path: '/services/development',
    element: <MyDevelopment />,
  },
])
