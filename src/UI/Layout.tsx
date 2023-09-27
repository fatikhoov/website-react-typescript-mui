// Layout.tsx
import React from 'react'

import Box from '@mui/material/Box'
import Header from '../modules/Header'
import SalesMenu from '../components/Menu/SalesMenu'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="App" sx={{ p: '0 32px', m: '32px 0' }}>
      <Header />
      <div style={{ border: '1px solid antiquewhite' }}>{children}</div>
      {/* <SalesMenu /> */}
    </Box>
  )
}

export default Layout
