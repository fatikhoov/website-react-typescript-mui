import { Outlet, useLocation } from 'react-router-dom'
import Layout from '../../../UI/Layout'
import ServicesWebsiteMenu from '../../../components/Menu/ServicesWebsiteMenu'
import { Grid } from '@mui/material'
import LandingPage from './landing'

export default function MyWebsites() {
  const location = useLocation()
  const { pathname } = location
  return (
    <Layout>
      <Grid className="container main" sx={{ display: 'flex', gap: '16px' }}>
        <div style={{ border: '1px solid #ccc', height: 'min-content' }}>
          <h3>Каталог сайтов:</h3>
          <ServicesWebsiteMenu />
        </div>
        <div style={{ flexGrow: 1, border: '1px solid #ccc' }}>
          {pathname === '/services/websites' ||
          pathname === '/services/websites/' ||
          pathname === '/services/websites/landing' ||
          pathname === '/services/websites/landing/' ? (
            <LandingPage />
          ) : (
            <Outlet />
          )}
        </div>
      </Grid>
    </Layout>
  )
}
