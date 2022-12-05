import React, { FC } from "react"
import { ButtonLink } from "../../utils/components/ButtonLink/ButtonLink"
import { Container } from "../../utils/components/Container/Container"
import { cls, OZON_URL, yaMetrikaGoal } from "../../utils/utils"
import { Menu } from "../Menu/Menu"
import { Logo } from "../Logo/Logo"

import * as styles from "./Footer.module.scss"

export const Footer : FC = () => {
  
  return (
    <footer id="footer" className={ styles.footer }>
      <div className={ styles.footer__main }>
        <Container>
          <div className={cls(styles.footer__row, styles.footer__mainRow)}>
          <Logo type="footer" />
          <Menu type="footer" />
          <ButtonLink 
            onClick={() => yaMetrikaGoal('click_buy_footer')} 
            href={ OZON_URL } 
            target="_blank" 
            className="buttonLink-orange"
          >
            Купить
          </ButtonLink>
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