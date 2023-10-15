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
  },
  {
    path: '/services/websites',
    element: <MyWebsites />,
    children: [
      {
        path: 'landing',
        element: <LandingPage />,
        handle: {
          crumb: () => 'Лендинг',
        },
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

export const pages: { [key: string]: string } = {
  services: 'Услуги',
  portfolio: 'Портфолио',
  contacts: 'Контакты',
}
export const titles = {
  '/': 'Главная',
  '/services': 'Услуги',
  '/services/websites': 'Сайты',
  '/services/design': 'Дизайн',
  '/services/development': 'Программирование',
}
// Определим объект с названиями страниц
export const pageTitles: Record<string, string> = {
  '/': 'Главная',
  '/services': 'Услуги',
  '/services/websites': 'Cайты',
  '/services/websites/landing': 'Лендинг',
  '/services/websites/ecommerce': 'интернет-магазин',
  '/services/websites/bussiness': 'корпоративный сайт',
  '/services/design': 'Дизайн',
  '/services/development': 'Программирование',
}
