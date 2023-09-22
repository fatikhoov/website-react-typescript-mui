import { Outlet, Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Header from '../../modules/Header'

export default function MyRoot() {
  return (
    <Box className="App" component="span" sx={{ p: 0, m: '32px 14px' }}>
      <Header />
      <h1>Наши услуги (поиск по категориям будет)</h1>
      <div id="detail">
        <Outlet />
      </div>
    </Box>
  )
}
