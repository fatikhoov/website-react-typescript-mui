import { ThemeOptions } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#222s',
    },
    secondary: {
      main: 'red',
    },
  },
}

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paperScrollPaper': {
    width: '100%',
  },
  '& .MuiLinearProgress-root': {
    width: '100%',
  },
  '& .MuiDialogContent-root': {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    minHeight: '260px',
    gap: '8px',
    borderTop: 'none',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
  '& .MuiPaper-root': {
    fontSize: '12px',
  },
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
  },
  '& .MuiFormControl-root': {
    display: 'flex',
    gap: '8px',
  },
  '& .css-vnkopk-MuiStepLabel-iconContainer': {
    paddingRight: '0',
  },
}))
export const StarpageButton = styled(Button)({
  width: '100%',
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: 18,
  borderRadius: 30,
  background: 'linear-gradient(254deg,#d900dd 0,#0345fa 100%)',
  fontFamily: ['Montserrat'],
})
