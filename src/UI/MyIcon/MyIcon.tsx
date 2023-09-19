import React, { FC } from 'react'

interface MyIconProps {
  src: string
  alt: string
}

const MyIcon: FC<MyIconProps> = ({ src, alt }) => (
  <img className="fv-button-img" src={src} alt={alt} />
)

export default MyIcon
