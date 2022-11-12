import React, { FC } from 'react'
import { ElementProps } from '../../types/types'
import { cls } from '../../utils'

export const Content : FC<ElementProps<HTMLDivElement>> = ({className, attributes, children}) => {
  return (
    <main id="page-content" className={cls('page-content', className)} {...attributes}>
      {children}
    </main>
  )
}
