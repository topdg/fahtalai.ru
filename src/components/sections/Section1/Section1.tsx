import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ButtonLink } from '../../../utils/components/ButtonLink/ButtonLink'
import { cls, OZON_URL, yaMetrikaGoal } from '../../../utils/utils'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './Section1.module.scss'

export const Section1 : FC = ( ) => {

  return (
    <Section className={cls("section-lightgreen", styles.section1)}>
      <Container>
        <div className={ styles.section1__content }>
          <h1 className={ styles.section1__title }>Фа Талай Джон</h1>
          <ButtonLink 
            className="buttonLink-lightgreen"
            href={ OZON_URL } 
            target='_blank'
          >
            травяные таблетки от гриппа и простуды
          </ButtonLink>
        </div>
      </Container>
      <a 
        href={ OZON_URL } 
        target="_blank" 
        className={ styles.section1__ozon }
        onClick={() => yaMetrikaGoal('hot_price_ozon')} 
      >
        <StaticImage src="../../../assets/images/section-1__ozon.png" alt="Выгодная цена на OZON" className={ styles.section1__ozon_img } />
      </a>
      <div className={ styles.section1__picture }>
        <StaticImage src="../../../assets/images/sect1img.png" alt="Упаковка Фа Талай Джон" className={ styles.section1__img } />
      </div>
    </Section>
  )
}
