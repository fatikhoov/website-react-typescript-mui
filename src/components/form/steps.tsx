import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import { TextField } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import ClearIcon from '@mui/icons-material/Clear'

interface QuizFormProps {
  formDataKeys: { [key: string]: string }
  formData: { [key: string]: string }
  errorMessage: { [key: string]: string }
  showErrors: boolean
  activeStep: number
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClearField: (fieldName: string) => void
}

export function QuizForm({
  formDataKeys,
  formData,
  errorMessage,
  showErrors,
  activeStep,
  handleFieldChange,
  handleClearField,
}: QuizFormProps) {
  const stylesFlex: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }

  const steps = [
    {
      label: 'Вводные данные',
      component: (
        <div style={stylesFlex}>
          {[formDataKeys.name, formDataKeys.company].map((key) => (
            <TextField
              key={key}
              required
              id={key}
              /* error={showErrors && errorMessage[key] !== ''} */
              color={
                !showErrors && errorMessage[key] === '' ? 'success' : 'error'
              }
              label={key}
              autoFocus
              value={formData[key]}
              variant="standard"
              name={key}
              type="text"
              placeholder={
                key === formDataKeys.name
                  ? 'Илон Маск'
                  : key === formDataKeys.company
                  ? 'Продажа автомобилей'
                  : ''
              }
              onChange={handleFieldChange}
              helperText={
                showErrors
                  ? errorMessage[key]
                    ? errorMessage[key]
                    : 'Заполните обязательное поле'
                  : ''
              }
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {formData[key] && (
                      <IconButton
                        onClick={() => handleClearField(key)}
                        edge="end"
                      >
                        <ClearIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          ))}
        </div>
      ),
    },

    {
      label: 'Какой сайт вам нужен',
      component: (
        <RadioGroup
          aria-labelledby="website-radio-buttons-group-label"
          name="website-radio-buttons-group"
          onChange={handleFieldChange}
          value={formData['website-radio-buttons-group']}
        >
          <FormControlLabel
            value="bussiness"
            control={<Radio />}
            label="Сайт-визитка"
          />
          <FormControlLabel
            value="ecommerce"
            control={<Radio />}
            label="Интернет-магазин"
          />
          <FormControlLabel
            value="landing"
            control={<Radio />}
            label="Лендинг страница"
          />
          <FormControlLabel
            value="websitehelp"
            control={<Radio />}
            label="Не знаю, нужна консультация"
          />
        </RadioGroup>
      ),
    },
    {
      label: 'Есть ли у Вас фирменный стиль',
      component: (
        <RadioGroup
          aria-labelledby="design-radio-buttons-group-label"
          name="design-radio-buttons-group"
          onChange={handleFieldChange}
          value={formData['design-radio-buttons-group']} // Устанавливаем значение из стейта
        >
          <FormControlLabel value="yes" control={<Radio />} label="Да" />
          <FormControlLabel value="no" control={<Radio />} label="Нет" />
        </RadioGroup>
      ),
    },
    {
      label: 'Контактные данные',
      component: (
        <div style={stylesFlex}>
          {[formDataKeys.phone, formDataKeys.email, formDataKeys.telegram].map(
            (key) => (
              <TextField
                key={key}
                required
                color={!showErrors ? 'success' : 'info'}
                id={key}
                name={key}
                variant="standard"
                label={key}
                placeholder={
                  key === formDataKeys.phone
                    ? '+7 999 123-45-67'
                    : key === formDataKeys.email
                    ? 'hello@mail.ru'
                    : key === formDataKeys.telegram
                    ? '@my_nickname'
                    : ''
                }
                type={
                  key === formDataKeys.phone
                    ? 'tel'
                    : key === formDataKeys.email
                    ? 'email'
                    : 'text'
                }
                value={formData[key]}
                onChange={handleFieldChange}
                helperText={
                  showErrors
                    ? errorMessage[key]
                      ? errorMessage[key]
                      : formData[key] === ''
                      ? 'Заполните обязательное поле'
                      : ''
                    : ''
                }
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {formData[key] && (
                        <IconButton
                          onClick={() => handleClearField(key)}
                          edge="end"
                        >
                          <ClearIcon />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            )
          )}
        </div>
      ),
    },
  ]

  return (
    <FormControl>
      <FormLabel sx={{ fontSize: '14px' }}>
        <mark
          style={{
            background: '#fff',
            fontWeight: 700,
            textTransform: 'uppercase',
            padding: '4px 4px 0px 20px',
            marginLeft: '-20px',
          }}
        >
          {steps[activeStep].label}
        </mark>
      </FormLabel>
      {steps[activeStep].component}
    </FormControl>
  )
}
