import { RouterProvider } from 'react-router-dom'

import Header from './modules/Header'
import Box from '@mui/material/Box'
import SalesMenu from './components/SalesMenu'

import { router } from './routes/index'

function App() {
  return (
    <Box className="App" component="span" sx={{ p: 0, m: '32px 14px' }}>
      <Header />
      <RouterProvider router={router} />
      <SalesMenu />
    </Box>
  )
}

export default App
