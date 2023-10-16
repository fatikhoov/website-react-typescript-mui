import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { pages, pageTitles } from '../routes/index'

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
import './mobile.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 'none',
  textAlign: 'center',
  boxShadow: 'none',
}))

export default function Header() {
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname as keyof typeof pageTitles
    document.title = pageTitles[pathname] ?? 'STARPAGE digital agency'
  }, [location])

  return (
    <Box
      className="wrapper_header"
      sx={{
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
        className="header-wrapper"
        sx={{ width: 'auto', background: '#fff', m: 0, p: 0 }}
      >
        <Grid sx={{ flexGrow: 1, m: 0, p: 0 }}>
          <Item className="header-mobile-logo">
            <BurgerMenu />
            <Link className="header-logo" to={'/'}>
              <span>STARPAGE</span>
            </Link>
            <List
              className="nav-header-menu"
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
        <Grid className="callback-header" sx={{ m: 0, p: 0 }}>
          <Item sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Button
              href="tel:+79991303619"
              variant="outlined"
              startIcon={<MdPhone />}
            >
              Позвонить
            </Button>
            <Button
              href="https://t.me/vladislav_fatikhov"
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
              <Telegram
                href="https://t.me/vladislav_fatikhov"
                color="primary"
              />
            </Button>
            <AuthMenu />
          </Item>
        </Grid>
      </Grid>
      {location.pathname === '/' ? null : (
        <Grid container direction="row" xs={12}>
          <Item>
            <Breadcrumbs
              symbols="—"
              homeLabel="Главная"
              pageTitles={pageTitles}
              color="#1976d2"
              disabledColor="#ccc"
            />
          </Item>
        </Grid>
      )}
    </Box>
  )
}
