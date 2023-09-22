import Welcome from './Welcome'

import Box from '@mui/material/Box'
import Header from '../../modules/Header'

import SalesMenu from '../../components/Menu/SalesMenu'

const HomePage = () => {
  return (
    <Box className="App" sx={{ p: 0, m: '32px 14px' }}>
      <Header />
      <Welcome />
      {/* <SalesMenu /> */}
    </Box>
  )
}

export default HomePage
