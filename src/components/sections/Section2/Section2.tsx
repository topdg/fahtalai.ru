import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ItemIconWithTextAndTitle, ListItem } from '../../../utils/types/types'
import { List } from '../../../utils/components/List/List'
import { StaticImage } from 'gatsby-plugin-image'
import { cls } from '../../../utils/utils'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './Section2.module.scss'

export const Section2 : FC = () => {

  const data = useStaticQuery(graphql`
  {
    icons: allFile(filter: {name: {in: ["section-2__icon-1", "section-2__icon-2"]}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
  `)

  const items : ItemIconWithTextAndTitle[] = [
    {
      icon: data.icons.edges[0].node.publicURL,
      title: '100% натуральный',
      text: 'растительный состав',
    },
    {
      icon: data.icons.edges[1].node.publicURL,
      title: 'Гарантия качества',
      text: 'Средство имеет сертификат Евразийского Соответствия и безопасно для здоровья',
    },
  ]

  const listItems : ListItem = [
    'в странах Азии издавна считается природным антибиотиком',
    'риск заболеваемости респираторными инфекциями снижается на 75% при приёме Фа Талай Джон на протяжении двух месяцев<sup>1</sup>',
    'в 2021-м году Кабинет министров Таиланда одобрил использование Fah Talai Jone для лечения лёгких и бессимптомных форм COVID–19<sup>2,3,4,5</sup>',
  ]

  return (
    <Section className={cls("section-lightgreen", styles.section2)}>
      <Container>
        <div className={styles.section2__content}>
          <div className={styles.section2__items}>
            {
              items.map((el, i) => 
                <div key={i} className={ styles.section2__item }>
                  {
                    el.icon &&
                    <div className={ styles.section2__item_picture } >
                      <img src={ el.icon } className={ styles.section2__item_img } alt={ el.title } />
                    </div>
                  }
                  <div className={ styles.section2__item_content }>
                    <div className={ styles.section2__item_title } dangerouslySetInnerHTML={ {__html: el.title} } />
                    <div className={ styles.section2__item_text } dangerouslySetInnerHTML={ {__html: el.text} } />
                  </div>
                </div>  
              )
            }
          </div>
          <div className={ styles.section2__picture }>
            <StaticImage src="../../../assets/images/section-2__nabor.png" alt="травяной набор" className={ styles.section2__img } />
          </div>
          <List items={listItems} />
        </div>
      </Container>
    </Section>
  )
}
