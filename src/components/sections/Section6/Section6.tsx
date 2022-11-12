import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ItemIconWithText } from '../../../utils/types/types'
import { Title } from '../../../utils/components/Title/Title'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './Section6.module.scss'

export const Section6 : FC = ( ) => {

  const data = useStaticQuery(graphql`
  {
    icons: allFile(filter: {name: {in: ["section-6__icon-1", "section-6__icon-2", "section-6__icon-3", "section-6__icon-4", "section-6__icon-5"]}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
  `);

  const items : ItemIconWithText[] = [
    {
      icon: data.icons.edges[0].node.publicURL,
      text: 'можно принимать длительное время',
    },
    {
      icon: data.icons.edges[1].node.publicURL,
      text: 'можно назначать детям от 6-ти лет',
    },
    {
      icon: data.icons.edges[2].node.publicURL,
      text: 'не сопровождается нежелательными явлениями',
    },
    {
      icon: data.icons.edges[3].node.publicURL,
      text: 'не вызывает привыкания и зависимости',
    },
    {
      icon: data.icons.edges[4].node.publicURL,
      text: 'совместим с лекарствами',
    },
  ]

  return (
    <Section className="section-lightgreen">
      <Container>
        <Title>Высокий профиль безопасности<sup>7</sup></Title>
        <div className={styles.section6__items}>
          {
            items.map((el, i) => 
              <div key={i} className={ styles.section6__item }>
                {
                  el.icon &&
                  <div className={ styles.section6__item_picture } >
                    <img src={el.icon} className={ styles.section6__item_img } alt={ el.text } />
                  </div>
                }
                <div className={ styles.section6__item_content }>
                  <div className={ styles.section6__item_text } dangerouslySetInnerHTML={ {__html: el.text} } />
                </div>
              </div>  
            )
          }
        </div>
      </Container>
    </Section>
  )
}