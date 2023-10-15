import * as React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Menu from '@mui/icons-material/Menu'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'

import { menuItems } from './ItemsMenu'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function BurgerMenu() {
  const [servicesMenuOpen, setServicesMenuOpen] = React.useState(true)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const closeBurgerMenu = () => {
    setState({ ...state, left: false })
  }
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <React.Fragment key={menuItem.text}>
            {menuItem.subMenu ? (
              <ListItem key={menuItem.text} disablePadding>
                <ListItemButton
                  onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                >
                  {/*  <ListItemIcon>
                          <ArrowForward />
                        </ListItemIcon> */}
                  <ListItemText primary={menuItem.text} />
                  {servicesMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem key={menuItem.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={menuItem.to}
                  onClick={closeBurgerMenu}
                >
                  {/* <ListItemIcon>
                          <ArrowForward />
                        </ListItemIcon> */}
                  <ListItemText primary={menuItem.text} />
                </ListItemButton>
              </ListItem>
            )}
            {menuItem.subMenu && (
              <Collapse in={servicesMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {menuItem.subMenu.map((subMenuItem, subIndex) => (
                    <ListItem key={subMenuItem.text} disablePadding>
                      <ListItemButton
                        component={Link}
                        to={subMenuItem.to}
                        onClick={closeBurgerMenu}
                      >
                        {/* <ListItemIcon>
                          <ArrowForward />
                        </ListItemIcon> */}
                        <span style={{ textIndent: '20px' }}>
                          <ListItemText primary={subMenuItem.text} />
                        </span>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Button
        style={{
          justifyContent: 'flex-start',
          padding: 0,
          minWidth: 'min-content',
        }}
        onClick={toggleDrawer('left', true)}
      >
        <Menu color="primary" fontSize="large" />
      </Button>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            height: '100%',
          },
        }}
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </>
  )
}
