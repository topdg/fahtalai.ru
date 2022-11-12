import React, { FC } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { LogoProps } from './Logo.types'
import { cls } from '../../utils/utils'

import * as styles from './Logo.module.scss'

export const Logo : FC<LogoProps> = ( { type = 'header' } ) => {

  return (
    <Link to="/">
      {
        type == 'header' ?
          <div className={styles.logo}>
            <StaticImage src={"../../assets/images/logo-mobile.png"} alt="Логотип Фа Талай Джон" className={cls(styles.logoHeader, styles.logoHeaderMobile)} />
            <StaticImage src={"../../assets/images/logo.png"} alt="Логотип Фа Талай Джон" className={cls(styles.logoHeader, styles.logoHeaderDesktop)} />
          </div>
        :
        <StaticImage src="../../assets/images/logo-footer.png" alt="Логотип Фа Талай Джон" className={cls(styles.logo, styles.logoFooter)} />
      }
    </Link>
  )
}
