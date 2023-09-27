import * as React from 'react'
// import Switch from '@mui/material/Switch'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormGroup from '@mui/material/FormGroup'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Person from '@mui/icons-material/Person'
import Button from '@mui/material/Button'

const Img = styled('img')({
  margin: '0',
  display: 'block',
  maxWidth: '26px',
  maxHeight: '26px',
})

export default function AuthMenu() {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  //обработка авторизации
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {/*       <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Авторизован' : 'Не авторизован'}
        />
      </FormGroup> */}
      {auth && (
        <div>
          <Button
            variant="outlined"
            sx={{
              width: '42px',
              height: '42px',
              borderRadius: '100px',
              p: 0,
              m: 0,
              minWidth: 'auto',
            }}
            onClick={handleMenu}
          >
            {/*   <Img alt="telegram starpage" src="/images/account.png" /> */}
            <Person color="primary" />
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Профиль</MenuItem>
            <MenuItem onClick={handleClose}>Статус заказа</MenuItem>
            <MenuItem onClick={handleClose}>Выход</MenuItem>
          </Menu>
        </div>
      )}
    </>
  )
}
