import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import Telegram from '@mui/icons-material/Telegram'
import MdPhone from '@mui/icons-material/Phone'
import AuthMenu from '../components/Menu/AuthMenu'
import BurgerMenu from '../components/Menu/BurgerMenu'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import List from '@mui/material/List'
import Box from '@mui/material/Box'
import './style.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 'none',
  textAlign: 'center',
  boxShadow: 'none',
}))

const pages: { [key: string]: string } = {
  services: 'Услуги',
  portfolio: 'Портфолио',
  contacts: 'Контакты',
}
const titles = {
  '/': 'Главная STARPAGE digital agency',
  '/services': 'Услуги STARPAGE digital agency',
  '/services/websites': 'Разработка сайтов STARPAGE digital agency',
  '/services/design': 'Дизайн STARPAGE digital agency',
  '/services/development': 'Программирование STARPAGE digital agency',
}

export default function Header() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname as keyof typeof titles
    document.title = titles[pathname] ?? 'STARPAGE digital agency'
  }, [location])

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        columnSpacing={2}
        xs={12}
        sx={{ width: 'auto', height: '50px', background: '#fff', m: 0, p: 0 }}
      >
        <Grid sx={{ flexGrow: 1, m: 0, p: 0 }}>
          <Item
            sx={{
              display: 'flex',
              flexDirection: 'row',
              textAlign: 'left',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <BurgerMenu />
            <Link className="header-logo" to={'/'}>
              <span>STARPAGE</span>
            </Link>
            <List
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              {Object.entries(pages).map(([key, value]) => (
                <Link key={key} to={`/${key}`}>
                  <Button variant="text">{value}</Button>
                </Link>
              ))}
            </List>
          </Item>
        </Grid>
        <Grid sx={{ m: 0, p: 0 }}>
          <Item sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button variant="outlined" startIcon={<MdPhone />}>
              Позвоните мне
            </Button>
            <AuthMenu />
            <Button
              variant="outlined"
              sx={{
                width: '42px',
                height: '42px',
                borderRadius: '100px',
                p: 0,
                m: 0,
                minWidth: 'auto',
              }}
            >
              {/*  <Img
                alt="telegram starpage"
                src="/images/telegram/telegram1.svg"
              /> */}
              <Telegram color="primary" />
            </Button>
          </Item>
        </Grid>
      </Grid>
      {location.pathname === '/' ? null : (
        <Grid container direction="row" xs={12}>
          <Item>
            <Breadcrumbs />
          </Item>
        </Grid>
      )}
    </Box>
  )
}
