// Layout.tsx
import React from 'react'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Header from '../modules/Header'
import SalesMenu from '../components/Menu/SalesMenu'

import { pageTitles } from '../routes/index'
interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()

  return (
    <Box className="App">
      <Header />
      <div className="container main" style={{ overflow: 'hidden' }}>
        <div className="wrapper">
          {location.pathname === '/' ? null : (
            <h1>{pageTitles[location.pathname]}</h1>
          )}
          {children}
        </div>
      </div>
      {/* <SalesMenu /> */}
    </Box>
  )
}

export default Layout
