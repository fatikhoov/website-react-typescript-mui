import * as React from 'react'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import { BootstrapDialog, StarpageButton } from '../../UI/ThemeOptions'

import CustomizedSteppers from './IndLine'
import { QuizForm } from '../form/steps'
import { useModalLogic } from '../../modules/CustomHooks/formLogic'

export default function CustomizedDialogs2() {
  const {
    open,
    isSubmitted,
    activeStep,
    maxSteps,
    formDataKeys,
    formData,
    errorMessage,
    showErrors,
    handleBack,
    handleNext,
    handleClickOpen,
    handleClose,
    handleFieldChange,
    handleClearField,
  } = useModalLogic()

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      <StarpageButton
        className="button-welcome"
        variant="contained"
        sx={{ maxWidth: '380px', width: '380px', height: '60px' }}
        onClick={handleClickOpen}
      >
        Рассчитать стоимость
      </StarpageButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {!isSubmitted ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <p style={{ fontSize: '18px' }}>Разработка сайта</p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    fontSize: '12px',
                    textAlign: 'left',
                    fontWeight: 500,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Пройдите тест для персонального расчета</span>
                </p>
                <p
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <CustomizedSteppers activeStep={activeStep} />{' '}
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#784af4',
                      fontWeight: 500,
                    }}
                  >
                    {activeStep + 1}/{maxSteps}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            'Разработка сайта'
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
          {!isSubmitted ? (
            <QuizForm
              formDataKeys={formDataKeys}
              formData={formData}
              activeStep={activeStep}
              handleFieldChange={handleFieldChange}
              handleClearField={(fieldName) => handleClearField(fieldName)}
              errorMessage={errorMessage}
              showErrors={showErrors}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                fontSize: '16px',
              }}
            >
              <h4>Заявка успешно отправлена!</h4>
              <p>
                Менеджер свяжется с Вами <br /> в ближайшее время
              </p>
              <img
                src="./images/rocket.png"
                alt="rocket"
                style={{
                  width: '100px',
                  alignSelf: 'center',
                  marginTop: '32px',
                }}
              />
            </div>
          )}
        </DialogContent>
        {!isSubmitted ? (
          <DialogActions sx={{ justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginLeft: 0,
              }}
            >
              <Button
                sx={{
                  borderRadius: 30,
                }}
                variant="outlined"
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Назад
              </Button>
              <Button
                sx={{
                  borderRadius: 30,
                  background: 'linear-gradient(254deg,#d900dd 0,#0345fa 100%)',
                }}
                variant="contained"
                size="small"
                onClick={() => handleNext(formData)}
              >
                {activeStep === maxSteps - 1 ? 'Отправить' : 'Вперед'}
              </Button>
            </div>
          </DialogActions>
        ) : (
          ''
        )}
      </BootstrapDialog>
    </div>
  )
}
