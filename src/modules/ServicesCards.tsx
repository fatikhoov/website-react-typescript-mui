import { Link } from 'react-router-dom'

import List from '@mui/material/List'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export function ServicesCards() {
  const pages: Record<string, { title: string; description: string }> = {
    websites: {
      title: 'Разработка сайтов',
      description:
        'Сайт визитка, интернет-магазин, лендинг, корпоративный сайт',
    },
    design: {
      title: 'Разработка дизайна',
      description: 'Эльмира Капкаева. Фирменный стиль, UI/UX, прототипирование',
    },
    development: {
      title: 'Программирование',
      description: 'Фатихов Владислав. Боты, программы, скрипты',
    },
  }

  return (
    <Grid className="container main">
      <h1>Наши услуги</h1>
      <List
        className="services-list"
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          gap: '16px',
        }}
      >
        {Object.entries(pages).map(([key, value]) => (
          <Link key={key} to={`/services/${key}`}>
            <Card>
              <CardContent>
                <h3>{value.title}</h3>
                <br />
                <p> {value.description}</p>
              </CardContent>
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </List>
    </Grid>
  )
}

export function ServicesWebsitesCards() {
  const pagesWebsites: Record<
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
  return (
    <Grid className="container main">
      <h1>Наши услуги</h1>
      <List
        className="services-list"
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-start',
          gap: '16px',
        }}
      >
        {Object.entries(pagesWebsites).map(([key, value]) => (
          <Link key={key} to={`/services/websites/${key}`}>
            <Card>
              <CardContent>
                <h3 style={{ fontSize: '18px' }}>{value.title}</h3>
                <br />
                <p> {value.description}</p>
                <br />
                <p> {value.dayWorks}</p>
              </CardContent>
              <CardActions>
                <Button size="small">Подробнее</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </List>
    </Grid>
  )
}
