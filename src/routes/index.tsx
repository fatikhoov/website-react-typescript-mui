import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import ServicesPage from '../pages/services/ServicesPage'
import MyPortfolio from '../pages/portfolio/portfolio'
import MyContacts from '../pages/contacts/MyContacts'

import ErrorPage from '../pages/ErrorPage'

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
    path: '/portfolio',
    element: <MyPortfolio />,
  },
  {
    path: '/contacts',
    element: <MyContacts />,
  },
  {
    path: '/services/landing',
    element: <LandingPage />,
  },
  {
    path: '/services/ecommerce',
    element: <EcommercePage />,
  },
  {
    path: '/services/bussiness',
    element: <BussinessPage />,
  },
  /*  {
    path: '/services/design',
    element: <MyDesign />,
  },
  {
    path: '/services/development',
    element: <MyDevelopment />,
  }, */
])

export const pages: { [key: string]: string } = {
  services: 'Услуги',
  portfolio: 'Кейсы',
  contacts: 'Контакты',
}

// Определим объект с названиями страниц
export const pageTitles: Record<string, string> = {
  '/': 'Главная',
  '/services': 'Услуги',
  '/portfolio': 'Кейсы',
  '/contacts': 'Контакты',
  '/services/websites': 'Cайты',
  '/services/landing': 'Лендинг',
  '/services/ecommerce': 'интернет-магазин',
  '/services/bussiness': 'Сайт-визитка',
  '/services/design': 'Дизайн',
  '/services/development': 'Программирование',
}

export const pagesWebsites: Record<
  string,
  { title: string; description: string; dayWorks: string }
> = {
  bussiness: {
    title: 'Сайт визитка',
    description:
      'Создаем интуитивно понятну навигацию по сайту с входами, переходами и захватывающим дизайном',
    dayWorks: '14-21 день',
  },
  ecommerce: {
    title: 'Интернет-магазин',
    description:
      'Разработаем полноценный магазин с корзиной, листингом и карточками товара, чтобы делать покупки легко',
    dayWorks: '21-28 дней',
  },
  landing: {
    title: 'Лендинг страница',
    description:
      'Продумаем и разработаем так, чтобы пользователь точно достиг цели',
    dayWorks: '5-7 дней',
  },
}
