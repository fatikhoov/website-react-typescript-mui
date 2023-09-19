import React from 'react'
import './test.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'elevated'
    | 'filled'
    | 'filled-tonal'
    | 'outlined'
    | 'text'
    | 'icon'
    | 'segmented'
    | 'fab'
    | 'extended-fab'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  ...props
}) => {
  const classNames = ['button', variant].join(' ')
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default Button
