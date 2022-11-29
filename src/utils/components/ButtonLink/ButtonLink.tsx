import React, { FC } from 'react'
import { cls } from '../../utils'
import { ButtonLinkProps } from './ButtonLink.types'

export const ButtonLink : FC<ButtonLinkProps> = ({ className, href, target, onClick, children }) => {

  return (
    <a className={cls('buttonLink', className)} href={href} target={target} onClick={onClick}>
      { children }
    </a>
  )
}
