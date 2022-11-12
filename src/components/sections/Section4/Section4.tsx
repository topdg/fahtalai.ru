import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ListItem } from '../../../utils/types/types'
import { Title } from '../../../utils/components/Title/Title'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './Section4.module.scss'
import { List } from '../../../utils/components/List/List'

export const Section4 : FC = ( ) => {

  const listItems : ListItem = [
    'инфекции верхних дыхательных путей',
    'кашель и бронхит',
    'грипп, ангина, ОРВИ, ОРЗ',
    'синуситы, гаймориты',
    'профилактика инфекционных осложнений',
    'снижение эффективности иммунной системы'
  ]

  return (
    <Section className="section-lightgreen">
      <Container>
        <div className={styles.section4__content}>
          <Title>Показания к применению таблеток Фа Талай Джон<sup>7</sup></Title>
          <div className={styles.section4__text}>Природный антибиотик <span>Фа Талай Джон</span> облегчает течение всех респираторных заболеваний, разжижает мокроту, уменьшает заложенность носа, снижает температуру тела. Таблетки оказывают общеукрепляющее и иммуностимулирующее действие, помогают организму справиться с болезнью и снижают риск возникновения осложнений</div>
          <div className={styles.section4__row}>
            {
              <div className={ styles.section4__picture } >
                <StaticImage src='../../../assets/images/section-4__img.png' className={ styles.section4__img } alt='Упаковка Фа Талай' />
              </div>
            }
            <List items={listItems} />
          </div>
        </div>
      </Container>
    </Section>
  )
}
