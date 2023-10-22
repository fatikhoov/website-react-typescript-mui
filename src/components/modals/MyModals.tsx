import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import { BootstrapDialog, StarpageButton } from '../../UI/ThemeOptions'

interface CustomizedDialogsProps {
  steps: { label: string; component: JSX.Element }[]
  textButton: string
  textKeyboard: { next: string; back: string }
  textFinish: string
}

export default function CustomizedDialogs({
  steps,
  textButton,
  textKeyboard,
  textFinish,
}: CustomizedDialogsProps) {
  const [open, setOpen] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length

  const handleSubmit = () => {
    console.log('форма отправлена')
    setIsSubmitted(true)
  }

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    } else if (activeStep === maxSteps - 1 && !isSubmitted) {
      handleSubmit()
    }
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <StarpageButton
        className="button-welcome"
        variant="contained"
        sx={{ maxWidth: '380px', width: '380px', height: '60px' }}
        onClick={handleClickOpen}
      >
        {textButton}
      </StarpageButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <FormControl>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            <p style={{ fontSize: '18px' }}>Заявка на разработку сайта</p>
            <p style={{ fontSize: '1px', fontWeight: 400 }}>
              Пройдите тест и получите персональный расчет
            </p>

            {!isSubmitted ? (
              <MobileStepper
                variant="progress"
                steps={maxSteps + 1}
                position="static"
                activeStep={activeStep + 1}
                nextButton={''}
                backButton={''}
                sx={{
                  padding: '16px 0 0 0',
                  marginBottom: '-18px',
                  marginLeft: '-16px',
                  marginRight: '-16px',
                }}
              />
            ) : (
              ''
            )}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <FormLabel id="demo-radio-buttons-group-label">
              {!isSubmitted
                ? steps[activeStep].label
                : 'Заявка успешно отправлена'}
            </FormLabel>
            {!isSubmitted ? (
              steps[activeStep].component
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                <p>Наш менеджер в ближайшее время свяжется с Вами!</p>
                <img
                  src="./images/rocket.png"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>
            )}
          </DialogContent>
          {!isSubmitted ? (
            <DialogActions sx={{ justifyContent: 'space-between' }}>
              <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button size="small" onClick={handleNext}>
                    {activeStep === maxSteps - 1
                      ? textFinish
                      : textKeyboard.next}
                    {/* {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )} */}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    {textKeyboard.back}
                  </Button>
                }
                sx={{ width: '100%' }}
              />
            </DialogActions>
          ) : (
            ''
          )}
        </FormControl>
      </BootstrapDialog>
    </div>
  )
}
