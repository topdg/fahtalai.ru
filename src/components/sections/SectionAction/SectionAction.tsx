import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ItemIconWithTextAndTitle } from '../../../utils/types/types'
import { Title } from '../../../utils/components/Title/Title'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './SectionAction.module.scss'

export const SectionAction : FC = ( ) => {

  const data = useStaticQuery(graphql`
  {
    icons: allFile(filter: {name: {in: ["section-3__icon-1", "section-3__icon-2", "section-3__icon-3", "section-3__icon-4", "section-3__icon-5", "section-3__icon-6"]}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
  `);

  const items : ItemIconWithTextAndTitle[] = [
    {
      icon: data.icons.edges[0].node.publicURL,
      title: 'избавляет',
      text: 'от симптомов простуды за 1–3 дня',
    },
    {
      icon: data.icons.edges[1].node.publicURL,
      title: 'снимает',
      text: 'неприятные ощущения и сухость в горле',
    },
    {
      icon: data.icons.edges[2].node.publicURL,
      title: 'устраняет',
      text: 'ломоту в костях и усталость',
    },
    {
      icon: data.icons.edges[3].node.publicURL,
      title: 'облегчает',
      text: 'кашель, разжижает мокроту',
    },
    {
      icon: data.icons.edges[4].node.publicURL,
      title: 'снижает',
      text: 'температуру',
    },
    {
      icon: data.icons.edges[5].node.publicURL,
      title: 'повышает',
      text: 'иммунитет',
    },
  ]

  return (
    <Section className="section-lightorange" attributes={ {id: "section-action"} }>
      <Container>
        <div className={styles.sectionAction__content}>
          <Title className="title-center">Улучшает самочувствие уже в первые дни приёма<sup>6</sup></Title>
          <div className={styles.sectionAction__items}>
            {
              items.map((el, i) => 
                <div key={i} className={ styles.sectionAction__item }>
                  {
                    el.icon &&
                    <div className={ styles.sectionAction__item_picture } >
                      <img src={ el.icon } className={ styles.sectionAction__item_img } alt={ el.title } />
                    </div>
                  }
                  <div className={ styles.sectionAction__item_content }>
                    <div className={ styles.sectionAction__item_title } dangerouslySetInnerHTML={ {__html: el.title} } />
                    <div className={ styles.sectionAction__item_text } dangerouslySetInnerHTML={ {__html: el.text} } />
                  </div>
                </div>  
              )
            }
          </div>
        </div>
      </Container>
    </Section>
  )
}
