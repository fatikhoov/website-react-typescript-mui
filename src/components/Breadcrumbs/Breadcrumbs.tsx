import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Определим объект с названиями страниц
const pageTitles: Record<string, string> = {
  '/': 'Главная',
  '/services': 'Услуги',
  '/services/websites': 'Разработка сайтов',
  '/services/websites/landing': 'лендинг страница',
  '/services/websites/ecommerce': 'интернет-магазин',
  '/services/websites/bussiness': 'корпоративный сайт',
  '/services/design': 'Дизайн',
  '/services/development': 'Программирование',
}

function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <ul style={{ display: 'flex', gap: '8px' }}>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const crumbLabel = pageTitles[routeTo] || path
        const isLast = index === pathnames.length - 1
        return (
          <li
            style={{ display: 'flex', gap: '8px', color: 'rgb(155 155 155)' }}
            key={index}
          >
            {index === 0 ? (
              <Link to="/" style={{ color: 'rgb(155 155 155)' }}>
                Главная
              </Link>
            ) : (
              ''
            )}
            {index === 0 ? <span>{'>'}</span> : ''}
            {isLast ? (
              <span>{crumbLabel}</span>
            ) : (
              <Link to={routeTo}>{crumbLabel}</Link>
            )}
            {isLast ? '' : <span>{'>'}</span>}
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
