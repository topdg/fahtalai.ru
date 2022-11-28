import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ButtonLink } from '../../../utils/components/ButtonLink/ButtonLink'
import { cls } from '../../../utils/utils'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './Section1.module.scss'

export const Section1 : FC = ( ) => {

  return (
    <Section className={cls("section-lightgreen", styles.section1)}>
      <Container>
        <div className={ styles.section1__content }>
          <h1 className={ styles.section1__title }>Фа Талай Джон</h1>
          <ButtonLink className="buttonLink-lightgreen" attributes={{onClick: () => ym(91414803, 'reachGoal','hot_price_ozon')}} href="https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE&product_id=743149088" target='_blank'>травяные таблетки от гриппа и простуды</ButtonLink>
        </div>
      </Container>
      <a href="https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE&product_id=743149088" target="_blank" className={ styles.section1__ozon }>
        <StaticImage src="../../../assets/images/section-1__ozon.png" alt="Выгодная цена на OZON" className={ styles.section1__ozon_img } />
      </a>
      <div className={ styles.section1__picture }>
        <StaticImage src="../../../assets/images/sect1img.png" alt="Упаковка Фа Талай Джон" className={ styles.section1__img } />
      </div>
    </Section>
  )
}
