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
  formData: { [key: string]: string }
  activeStep: number
  handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleClearField: (fieldName: string) => void
}

export function QuizForm({
  formData,
  activeStep,
  handleFieldChange,
  handleClearField,
}: QuizFormProps) {
  const steps = [
    {
      label: 'Вводные данные',
      component: (
        <div>
          <TextField
            id="standard-name"
            label="Ваше имя"
            variant="standard"
            name="standard-name"
            onChange={handleFieldChange}
            value={formData['standard-name']}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formData['standard-name'] && (
                    <IconButton
                      onClick={() => handleClearField('standard-name')}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="standard-company"
            label="Название компании"
            variant="standard"
            name="standard-company"
            onChange={handleFieldChange}
            value={formData['standard-company']}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formData['standard-name'] && (
                    <IconButton
                      onClick={() => handleClearField('standard-company')}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
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
        <div>
          <TextField
            id="standard-phone"
            name="standard-phone"
            label="Телефон"
            variant="standard"
          />
          <TextField
            id="standard-email"
            name="standard-email"
            label="Почта"
            variant="standard"
          />
          <TextField
            id="standard-telegram"
            name="standard-telegram"
            label="Ник в Telegram"
            variant="standard"
          />
        </div>
      ),
    },
  ]

  return (
    <FormControl>
      <FormLabel sx={{ fontSize: '14px' }}>
        <mark
          style={{
            background: '#1976d2',
            color: '#fff',
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
