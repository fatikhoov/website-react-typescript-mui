import { Link } from 'react-router-dom'

import List from '@mui/material/List'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const pages: { [key: string]: string } = {
  websites: 'Разработка сайта',
  design: 'Дизайн',
  development: 'Программирование',
}

export default function ServicesCards() {
  return (
    <Grid>
      <h1>Наши услуги</h1>
      <List
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
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Описание
                </Typography>
                <Typography variant="h5" component="div">
                  {value}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  сроки от 7 до 14 дней
                </Typography>
                <Typography variant="body2">
                  Список краткий услуг категории
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
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
