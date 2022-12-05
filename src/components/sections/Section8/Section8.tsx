
import React, { FC, useEffect, useRef, useState } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { Title } from '../../../utils/components/Title/Title'
import { StaticImage } from 'gatsby-plugin-image'
import { ButtonLink } from '../../../utils/components/ButtonLink/ButtonLink'
import { cls, OZON_URL, yaMetrikaGoal } from '../../../utils/utils'

import * as styles from './Section8.module.scss'

export const Section8 : FC = ( ) => {

  const targetSection = useRef(null);
  const [translate, setTranslate] = useState(0);

  const changeTargetSectionY = () => {
    let box = targetSection.current?.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

  const changePosition = ( ) => {
    const elementCoords = changeTargetSectionY();
    const currentScroll = window.pageYOffset + window.innerHeight*.7;
    if (currentScroll < elementCoords.bottom && currentScroll > elementCoords.top) {
      setTranslate(prev => elementCoords.bottom - currentScroll);

    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changePosition)
    
    return () => {
      window.removeEventListener("scroll", changePosition);
    }
  }, [])

  return (
    <Section 
      className={cls("section-lightorange", styles.section8)}
      ref={targetSection}
      >
        <div className={ styles.section8__bg } style={ { transform: `translate(${-translate/2}px, ${translate}px) rotate(-${translate / 10}deg)`} }>
          <StaticImage 
            src="../../../assets/images/section-8__bg.png"
            alt="фоновая картинка"
          />
        </div>
      <Container>
        <div className={ styles.section8__content } >
          <Title className="title-center">Закажите <span className="title-green">Фа Талай Джон</span> для регулярной профилактики простудных заболеваний и вирусных инфекций</Title>
          <div className={ styles.section8__main }>
              <div className={ styles.section8__main_title }>Набор Фа Талай Джон<br />2 в 1 по специальной цене</div>
              <div className={ styles.section8__main_links }>
                <ButtonLink 
                  onClick={() => yaMetrikaGoal('click_buy_ozon')}
                  href={ OZON_URL }
                  target="_blank"
                  className="buttonLink-blue"
                >
                  купить на OZON
                </ButtonLink>
                <a href="#" className={ styles.section8__main_link }>узнать подробности</a>
              </div>
              <div className={ styles.section8__main_picture }>
                <StaticImage src="../../../assets/images/section-8__img.png" className={ styles.section8__main_img } alt="Фа Талай Джон" />
              </div>
          </div>
          <div className={styles.section8__text}>Конечный потребитель получает Фа Талай Джон по самой низкой цене из всех подобных препаратов на рынке, благодаря недорогой форме упаковки и таблетированной форме выпуска</div>
        </div>
      </Container>
    </Section>
  )
}