import React, { FC } from 'react'
import './MyButton.css'
import './MyButtonSmall.css'

import MyIcon from '../MyIcon/MyIcon'

export interface MyButtonProps {
  children: any
  fvclassname?: string
  disabled?: boolean
  iconSrc?: string
  iconAlt?: string
}

const MyButton: FC<MyButtonProps> = ({
  children,
  fvclassname,
  disabled,
  iconSrc,
  iconAlt,
  ...props
}) => {
  const classNames = ['fv-button']
  if (fvclassname) {
    classNames.push(fvclassname)
  } else {
    classNames.push('small')
  }

  return (
    <button
      {...props}
      className={classNames.join(' ')}
      disabled={disabled ? true : false}
    >
      <span className="absolute">
        <span className="context"> {children}</span>

        {iconSrc && iconAlt && <MyIcon src={iconSrc} alt={iconAlt} />}
      </span>
    </button>
  )
}

export default MyButton
