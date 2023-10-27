import { useState, useEffect } from 'react'

interface updateErrorProps {
  k: string
  v: string
}

export function useModalLogic() {
  const [open, setOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = 4

  const formDataKeys = {
    name: 'Ваше имя',
    company: 'Описание проекта',
    websiteType: 'website-radio-buttons-group',
    firmStyle: 'design-radio-buttons-group',
    phone: 'Номер телефона',
    email: 'Ваша почта',
    telegram: 'Ник в Telegram',
  }
  const [formData, setFormData] = useState({
    [formDataKeys.name]: '',
    [formDataKeys.company]: '',
    [formDataKeys.websiteType]: 'ecommerce',
    [formDataKeys.firmStyle]: 'no',
    [formDataKeys.phone]: '',
    [formDataKeys.email]: '',
    [formDataKeys.telegram]: '',
  })
  const [showErrors, setShowErrors] = useState(false)
  // Функция для вывода ошибки
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  )

  // Здесь отправка формы
  useEffect(() => {
    if (isSubmitted) {
      console.log('форма отправлена')
    }
  }, [isSubmitted])

  //слушаем поля
  const handleFieldChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target
    setShowErrors(false)
    setErrorMessage((prevData) => {
      return {
        ...prevData,
        [name]: '', // Используйте квадратные скобки для динамического доступа к ключу
      }
    })
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

    setTimeout(() => {
      handleVerification(formData)
    }, 1000)
  }
  //очистка поля
  const handleClearField = (fieldName: any) => {
    setFormData({ ...formData, [fieldName]: '' })
  }

  //кнопки управления вперед назад
  const handleNext = (formDataNEW: { [key: string]: string }) => {
    if (handleVerification(formDataNEW)) {
      if (activeStep < maxSteps - 1) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      } else if (activeStep === maxSteps - 1 && !isSubmitted) {
        handleSubmit()
      }
      setShowErrors(false)
    } else {
      setShowErrors(true)
    }
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  //открыть и закрыть форму
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const updateError = ({ k, v }: updateErrorProps) => {
    setErrorMessage((prevData) => {
      return {
        ...prevData,
        [k]: v, // Используйте квадратные скобки для динамического доступа к ключу
      }
    })
  }
  //проверка полей шага и перед отправкой всей формы
  const handleVerification = (fd: { [key: string]: string }) => {
    const minLength = 2
    const maxLength = 20

    const name = fd[formDataKeys.name].trim()
    const company = fd[formDataKeys.company].trim()
    const phone = fd[formDataKeys.phone].trim()
    const email = fd[formDataKeys.email].trim()

    const onlyLettersRegex = /^[A-Za-zА-Яа-я]+$/
    const phoneRegex = /^[\+\d\s\(\)-]+$/

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    if (activeStep === 0) {
      if (name.length === 0) {
        updateError({
          k: formDataKeys.name,
          v: `${formDataKeys.name} не заполнено `,
        })
        return false
      } else if (name.length < minLength && name.length > 0) {
        updateError({
          k: formDataKeys.name,
          v: `${formDataKeys.name} слишком короткое `,
        })
        return false
      } else if (name.length > maxLength) {
        updateError({
          k: formDataKeys.name,
          v: `${formDataKeys.name} слишком длинное `,
        })
        return false
      } else if (!onlyLettersRegex.test(name)) {
        updateError({
          k: formDataKeys.name,
          v: `${formDataKeys.name} должно быть из букв `,
        })
        return false
      } else {
        updateError({
          k: formDataKeys.name,
          v: '',
        })
      }

      if (company.length === 0) {
        updateError({
          k: formDataKeys.company,
          v: `${formDataKeys.company} не заполнено `,
        })
        return false
      } else if (company.length < minLength && company.length > 0) {
        updateError({
          k: formDataKeys.company,
          v: `${formDataKeys.company} слишком короткое `,
        })
        return false
      } else if (company.length > maxLength) {
        updateError({
          k: formDataKeys.company,
          v: `${formDataKeys.company} слишком длинное `,
        })
        return false
      } else {
        updateError({
          k: formDataKeys.company,
          v: '',
        })
      }
    } else if (activeStep === 3) {
      if (!phone.match(phoneRegex)) {
        updateError({
          k: formDataKeys.phone,
          v: `Некорректный ${formDataKeys.phone}`,
        })
        return false
      } else if (phone.length > maxLength) {
        updateError({
          k: formDataKeys.phone,
          v: `${formDataKeys.phone} слишком длинный`,
        })
        return false
      } else if (phone.length < 10) {
        updateError({
          k: formDataKeys.phone,
          v: `${formDataKeys.phone} слишком короткий`,
        })
        return false
      } else {
        updateError({
          k: formDataKeys.phone,
          v: '',
        })
      }

      if (!email.match(emailRegex)) {
        updateError({
          k: formDataKeys.email,
          v: `Некорректная почта`,
        })
        return false
      } else if (email.length > 30) {
        updateError({
          k: formDataKeys.email,
          v: `Почта слишком длинная`,
        })
        return false
      } else if (email.length < minLength) {
        updateError({
          k: formDataKeys.email,
          v: `Почта короткая`,
        })
        return false
      } else {
        updateError({
          k: formDataKeys.email,
          v: '',
        })
      }
    }

    return true
  }

  //отправка формы
  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return {
    formDataKeys,
    formData,
    errorMessage,
    showErrors,
    setFormData,
    handleFieldChange,
    handleClearField,
    open,
    isSubmitted,
    activeStep,
    maxSteps,
    handleBack,
    handleNext,
    handleClickOpen,
    handleClose,
    handleVerification,
  }
}
