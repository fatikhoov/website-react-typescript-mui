import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const Img = styled('img')({
  margin: '0',
  display: 'block',
  maxWidth: '400px',
  maxHeight: '400px',
})
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 'none',
  textAlign: 'center',
  boxShadow: 'none',
}))

const Welcome = () => {
  return (
    <Grid className="home-welcome" sx={{ display: 'flex', width: '100%' }}>
      <Item sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h1 className="title-h1">
          КРЕАТИВНЫЕ САЙТЫ
          <br />- НАША ОСОБЕННОСТЬ
        </h1>
        <Button
          href="#"
          variant="contained"
          sx={{ width: '380px', height: '60px' }}
        >
          Рассчитать стоимость
        </Button>
      </Item>
      <Item>
        <Img src="/images/rocket.png" />
      </Item>
    </Grid>
  )
}

export default Welcome
