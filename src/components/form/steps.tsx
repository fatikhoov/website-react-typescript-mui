import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

const steps = [
  {
    label: 'Выбор продукта',
    component: (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="bussiness"
        name="radio-buttons-group"
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
        <FormControlLabel value="landing" control={<Radio />} label="Лендинг" />
      </RadioGroup>
    ),
  },
  {
    label: 'Контактная информация',
    component: (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="bussiness"
        name="radio-buttons-group"
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
        <FormControlLabel value="landing" control={<Radio />} label="Лендинг" />
      </RadioGroup>
    ),
  },
  {
    label: 'Комментарии и файл',
    component: (
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="bussiness"
        name="radio-buttons-group"
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
        <FormControlLabel value="landing" control={<Radio />} label="Лендинг" />
      </RadioGroup>
    ),
  },
]

export default steps
