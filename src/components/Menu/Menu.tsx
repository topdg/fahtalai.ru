import React, { FC } from "react"
import { Link } from "gatsby"
import { MenuProps } from "./Menu.types";

import * as styles from './Menu.module.scss';
import { cls } from "../../utils/utils";

export const Menu : FC<MenuProps> = ( { type = 'header', active = false, toggleMenu } ) => {

  const items = [
    {
      label: 'Действие',
      uri: '#section-action'
    },
    {
      label: 'Состав',
      uri: '#section-sostav'
    },
    {
      label: 'Инструкция',
      uri: '#section-use'
    },
    {
      label: 'Отзывы',
      uri: '#section-reviews'
    },
    {
      label: 'Производитель',
      uri: '#section-about'
    }
  ]

  return (
    <nav className={ cls(styles.Menu, type == 'footer' && styles.MenuFooter, type == 'header' && styles.MenuHeader, active && styles.MenuActive) }>
      <ul className={ styles.Menu__list }>
        {
          items.map((el, i) => <li key={i} className={ styles.Menu__item }><Link to={el.uri} className={ styles.Menu__link } onClick={toggleMenu}>{el.label}</Link></li>)
        }
      </ul>
    </nav>
  )
}