import { useState, useEffect } from 'react'

export function useModalLogic() {
  const [open, setOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = 4

  const [formData, setFormData] = useState<{
    'standard-name': string
    'standard-company': string

    'website-radio-buttons-group': string
    'design-radio-buttons-group': string

    'standard-phone': string
    'standard-email': string
    'standard-telegram': string
  }>({
    'standard-name': '',
    'standard-company': '',

    'website-radio-buttons-group': 'ecommerce',
    'design-radio-buttons-group': 'no',

    'standard-phone': '',
    'standard-email': '',
    'standard-telegram': '',
  })

  useEffect(() => {
    // Здесь вы можете реагировать на изменения buttonClicked
    if (isSubmitted) {
      console.log('форма отправлена')
    }
  }, [isSubmitted]) // Указываем зависимость в массиве

  const handleFieldChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target

    setFormData((prevData) => {
      if (type === 'radio') {
        return {
          ...prevData,
          [name]: value,
        }
      } else {
        return {
          ...prevData,
          [name]: value,
        }
      }
    })

    handleVerification(formData)
  }

  const handleClearField = (fieldName: any) => {
    setFormData({ ...formData, [fieldName]: '' })
  }

  const handleSubmit = () => {
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

  const handleVerification = (fd: { [key: string]: string }) => {
    console.log(activeStep, fd)

    const minLength = 2
    const maxLength = 20

    // Функция для вывода ошибки
    const errorMessage = (error: string) => {
      console.log('Ошибка:', error)
      // Здесь вы можете выполнить дополнительные действия для отображения ошибки в интерфейсе,
      // такие как добавление класса или вывод сообщения пользователю.
    }

    if (activeStep === 0) {
      const name = fd['standard-name'].trim()
      const company = fd['standard-company'].trim()
      const onlyLettersRegex = /^[A-Za-zА-Яа-я]+$/
      let errors = []

      if (name.length < minLength || name.length > maxLength) {
        errors.push('Имя должно быть от 2 до 20 символов')
      }

      if (!onlyLettersRegex.test(name)) {
        errors.push('Имя должно содержать только буквы')
      }

      if (company.length < minLength || company.length > maxLength) {
        errors.push('Название компании должно быть от 2 до 20 символов')
      }

      if (!onlyLettersRegex.test(company)) {
        errors.push('Название компании должно содержать только буквы')
      }

      if (errors.length === 0) {
        console.log('Верификация успешна')
        handleNext()
      } else {
        errors.forEach(errorMessage)
      }
    } else if (activeStep === 1) {
      const selectedWebsiteType = fd['website-radio-buttons-group']
      if (!selectedWebsiteType) {
        errorMessage('Выберите тип сайта')
      } else {
        console.log('Выбран тип сайта:', selectedWebsiteType)
        handleNext()
      }
    } else if (activeStep === 2) {
      const hasFirmStyle = fd['design-radio-buttons-group']

      if (!hasFirmStyle) {
        errorMessage('Выберите, есть ли у вас фирменный стиль')
      } else {
        console.log('Ответ на вопрос о фирменном стиле:', hasFirmStyle)
        handleNext()
      }
    } else if (activeStep === 3) {
      const phone = fd['standard-phone'].trim()
      const email = fd['standard-email'].trim()
      const telegram = fd['standard-telegram'].trim()

      const phoneRegex = /^\+?[0-9]+$/
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

      let errors = []

      if (phone.length < minLength || phone.length > maxLength) {
        errors.push('Длина номера телефона должна быть от 2 до 20 символов')
      }

      if (!phone.match(phoneRegex)) {
        errors.push('Номер телефона должен содержать только цифры')
      }

      if (email.length < minLength || email.length > maxLength) {
        errors.push(
          'Длина адреса электронной почты должна быть от 2 до 20 символов'
        )
      }

      if (!email.match(emailRegex)) {
        errors.push('Неправильный формат адреса электронной почты')
      }

      if (telegram.length < minLength || telegram.length > maxLength) {
        errors.push('Длина Telegram-имени должна быть от 2 до 20 символов')
      }

      if (errors.length === 0) {
        console.log('Верификация успешна')
        handleNext()
      } else {
        errors.forEach(errorMessage)
      }
    }
  }

  return {
    formData,
    setFormData,
    handleFieldChange,
    handleClearField,
    open,
    isSubmitted,
    activeStep,
    maxSteps,
    handleBack,
    handleClickOpen,
    handleClose,
    handleVerification,
  }
}
