import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
interface BreadcrumbsProps {
  symbols: string
  homeLabel: string
  pageTitles: Record<string, string>
  color: string
  disabledColor: string
}
function Breadcrumbs({
  symbols,
  homeLabel,
  pageTitles,
  color,
  disabledColor,
}: BreadcrumbsProps) {
  const location = useLocation()
  const [symbol, setSymbol] = useState<string>(symbols)
  const [count, setCount] = useState<number>(1)
  const [newPathnames, setNewPathnames] = useState<string[]>([])
  const [myNewPathnames, setMyNewPathnames] = useState<string[]>([])
  useEffect(() => {
    const newPathnames = location.pathname.split('/').filter((x) => x)
    const myNewPathnames = location.pathname.split('/').filter((x) => x)
    if (newPathnames.length > 2) {
      setSymbol('...')
      setCount(2)
      newPathnames.splice(0, newPathnames.length - 2)
    } else if (newPathnames.length <= 2) {
      setCount(1)
      setSymbol(symbols)
    }
    setNewPathnames(newPathnames)
    setMyNewPathnames(myNewPathnames)
  }, [location.pathname, symbols, count])
  return (
    <ul style={{ display: 'flex', gap: '8px' }}>
      {newPathnames.map((path, index) => {
        const isLast = index === newPathnames.length - 1
        const routeTo = `/${myNewPathnames.slice(0, index + count).join('/')}`
        const crumbLabel = pageTitles[routeTo]
        const crumbColor = isLast ? disabledColor : color

        return (
          <li style={{ display: 'flex', gap: '8px', color: color }} key={index}>
            {index === 0 && (
              <Link to="/" style={{ color: color }}>
                {homeLabel}
              </Link>
            )}
            {index === 0 && <span>{symbol}</span>}
            {isLast ? (
              <span style={{ color: crumbColor }}>
                {crumbLabel ? crumbLabel : '(страница не найдена)'}
              </span>
            ) : (
              <Link to={routeTo} key={index} style={{ color: crumbColor }}>
                {crumbLabel}
              </Link>
            )}
            {isLast ? '' : <span>{symbols}</span>}
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
