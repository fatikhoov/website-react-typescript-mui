import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'
import ButtonBase from '@mui/material/ButtonBase'

import AuthMenu from '../components/AuthMenu'
import BurgerMenu from '../components/BurgerMenu'
import './style.css'

const Img = styled('img')({
  margin: '0',
  display: 'block',
  maxWidth: '32px',
  maxHeight: '32px',
})
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 'none',
  textAlign: 'center',
  boxShadow: 'none',
}))

export default function Header() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      columnSpacing={2}
      xs={12}
      sx={{ width: 'auto', height: '50px', background: '#fff' }}
    >
      <Grid sx={{ flexGrow: 1 }}>
        <Item sx={{ textAlign: 'left' }}>
          <Button className="header-logo" variant="text" href="/">
            <span> STARPAGE</span>
          </Button>
        </Item>
      </Grid>
      <Grid>
        <Item sx={{ display: 'flex', alignItems: 'center' }}>
          <AuthMenu />
          <ButtonBase sx={{ width: '42px', height: '42px' }}>
            <Img alt="telegram starpage" src="/images/telegram/telegram1.svg" />
          </ButtonBase>
        </Item>
      </Grid>
      <Grid>
        <Item>
          <BurgerMenu />
        </Item>
      </Grid>
    </Grid>
  )
}
