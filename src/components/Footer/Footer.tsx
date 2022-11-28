import { graphql, Link, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import { ButtonLink } from "../../utils/components/ButtonLink/ButtonLink"
import { Container } from "../../utils/components/Container/Container"
import { cls } from "../../utils/utils"
import { Menu } from "../Menu/Menu"
import { Logo } from "../Logo/Logo"
import ym from 'react-yandex-metrika';

import * as styles from "./Footer.module.scss"

export const Footer : FC = () => {
  
  return (
    <footer id="footer" className={ styles.footer }>
      <div className={ styles.footer__main }>
        <Container>
          <div className={cls(styles.footer__row, styles.footer__mainRow)}>
          <Logo type="footer" />
          <Menu type="footer" />
          <ButtonLink attributes={{onClick: () => ym('reachGoal','click_buy_ozon')}} href="https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE&product_id=743149088" target="_blank" className="buttonLink-orange">Купить</ButtonLink>
          </div>
        </Container>
      </div>
      <div className={ styles.footer__bottom }>
        <Container>
          <div className={ styles.footer__bottom_content }>
            <a href="//topdg.ru" className={ styles.footer__bottom_link }>Сайт разработан в Digital Generation</a>
          </div>
        </Container>
      </div>
    </footer>
  )
}