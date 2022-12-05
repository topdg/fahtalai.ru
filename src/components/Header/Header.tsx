import React, { FC, useEffect, useRef, useState } from "react";
import { Container } from "../../utils/components/Container/Container";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import { cls, OZON_URL, yaMetrikaGoal } from "../../utils/utils";
import { HeaderProps } from "./Header.types";
import { ButtonLink } from "../../utils/components/ButtonLink/ButtonLink";

import * as styles from './Header.module.scss';

export const Header : FC<HeaderProps> = ( { active = false, toggleMenu } ) => {

  const [isFixed, setIsFixed] = useState(false);

  const toggleFixedHeader = (e : Event) => {
    const window = e.currentTarget as Window;
    if (window.scrollY > 150) {
      if (!isFixed) {
        setIsFixed(true);
      }
    }
    else if (isFixed) {
      setIsFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleFixedHeader);
    return () => window.removeEventListener("scroll", toggleFixedHeader);
  }, [isFixed]);
  
  return (
    <header className={cls(styles.header, isFixed && styles.headerFixed)}>
      <Container>
        <div className={styles.header__content}>
          <Logo />
          <Menu type="header" active={active} toggleMenu={toggleMenu} />
          <ButtonLink 
            onClick={() => yaMetrikaGoal('click_buy_header')}
            href={ OZON_URL } 
            target="blank"
            className={cls("buttonLink-orange", styles.header__buttonLink)}
          >
            Купить
          </ButtonLink>
        </div>
      </Container>
    </header>
  )
}