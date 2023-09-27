import * as React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const menuItems = [
  { text: 'Лендинг страница', to: '/services/websites/landing' },
  { text: 'Интернет-магазин', to: '/services/websites/ecommerce' },
  { text: 'Корпоративный сайт', to: '/services/websites/bussiness' },
]

export default function BurgerMenu() {
  const list = () => (
    <Box
      sx={{
        width: 'max-content',
      }}
      role="presentation"
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={menuItem.text}>
            {
              <ListItem key={menuItem.text} disablePadding>
                <ListItemButton component={Link} to={menuItem.to}>
                  <ListItemText primary={menuItem.text} />
                </ListItemButton>
              </ListItem>
            }
          </React.Fragment>
        ))}
      </List>
    </Box>
  )

  return list()
}
