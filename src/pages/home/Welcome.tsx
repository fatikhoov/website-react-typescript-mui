import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import steps from '../../components/form/steps'
import CustomizedDialogs from '../../components/modals/MyModals'

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
    <Grid
      className="home-welcome"
      sx={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          alignItems: 'flex-start',
        }}
      >
        <h1 className="title-h1">
          КРЕАТИВНЫЕ САЙТЫ
          <br />- НАША ОСОБЕННОСТЬ
        </h1>
        <CustomizedDialogs
          steps={steps}
          textButton={'Рассчитать стоимость'}
          textKeyboard={{ next: 'Вперед', back: 'Назад' }}
          textFinish={'Отправить'}
        />
        <div
          className="desktop"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start',
          }}
        >
          <h4 className="title-h4">
            Мы знаем, как разработать сайт,
            <br />
            который принесет прибыль!
          </h4>
          <Img
            className="image-stars"
            sx={{
              alignSelf: 'center',
            }}
            src="/images/stars.png"
          />
        </div>
      </Item>
      <Item
        className="wrapper-welcome-images"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 0 0 14px',
        }}
      >
        <div className="my-square desktop"></div>
        <Img className="image-stars mobile" src="/images/stars.png" />
        <Img className="image-rocket" src="/images/rocket.png" />
      </Item>
      <Item className="mobile">
        <h4>
          Мы знаем, как разработать сайт,
          <br />
          который принесет прибыль!
        </h4>
      </Item>
    </Grid>
  )
}

export default Welcome
