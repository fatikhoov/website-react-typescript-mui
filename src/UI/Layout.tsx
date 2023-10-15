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
    <Box className="App">
      <Header />
      <div style={{ overflow: 'hidden' }}>{children}</div>
      {/* <SalesMenu /> */}
    </Box>
  )
}

export default Layout
