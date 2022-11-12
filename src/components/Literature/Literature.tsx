import React, { FC } from 'react'
import { LiteratureProps } from './Literature.types'
import { Title } from '../../utils/components/Title/Title'

import * as styles from './Literature.module.scss'

export const Literature : FC<LiteratureProps> = ( {title, list} ) => {

  return (
    <div className={ styles.literature }>
      {
        title &&
        <Title>{ title }</Title>
      }
      <ol className={ styles.literature__list }>
        {
          list.map((el, i) => <li key={i} className={ styles.literature__list_item }>{el}</li> )
        }
      </ol>
    </div>
  )
}
