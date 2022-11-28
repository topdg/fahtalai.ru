import React, { FC, useEffect, useState } from "react";
import { Container } from "../../utils/components/Container/Container";
import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";
import { cls } from "../../utils/utils";
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
          <ButtonLink attributes={{onClick: () => ym('reachGoal','click_buy_header')}}  href="https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE&product_id=743149088" target="blank" className={cls("buttonLink-orange", styles.header__buttonLink)}>Купить</ButtonLink>
        </div>
      </Container>
    </header>
  )
}