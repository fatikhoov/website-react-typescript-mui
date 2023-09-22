import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import ButtonBase from '@mui/material/ButtonBase'

import AuthMenu from '../components/Menu/AuthMenu'
import BurgerMenu from '../components/Menu/BurgerMenu'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

import Box from '@mui/material/Box'
import './style.css'

const Img = styled('img')({
  margin: '0',
  display: 'block',
  maxWidth: '32px',
  maxHeight: '32px',
})
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 'none',
  textAlign: 'center',
  boxShadow: 'none',
}))

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
          </Item>
        </Grid>
        <Grid sx={{ m: 0, p: 0 }}>
          <Item sx={{ display: 'flex', alignItems: 'center' }}>
            <AuthMenu />
            <ButtonBase sx={{ width: '42px', height: '42px' }}>
              <Img
                alt="telegram starpage"
                src="/images/telegram/telegram1.svg"
              />
            </ButtonBase>
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
