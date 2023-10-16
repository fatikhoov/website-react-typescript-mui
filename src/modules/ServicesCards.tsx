import React from 'react'
import { Link } from 'react-router-dom'
import {
  List,
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
} from '@mui/material'

interface Service {
  title: string
  description: string
  dayWorks: string
}

interface ServicesWebsitesCardsProps {
  pagesWebsites: Record<string, Service>
}

const ServicesWebsitesCards: React.FC<ServicesWebsitesCardsProps> = ({
  pagesWebsites,
}) => {
  return (
    <Grid>
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
          <Link className="cards-services" key={key} to={`/services/${key}`}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <h3 style={{ fontSize: '18px' }}>{value.title}</h3>
                <br />
                <p>{value.description}</p>
                <br />
                <p>{value.dayWorks}</p>
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

export default ServicesWebsitesCards
