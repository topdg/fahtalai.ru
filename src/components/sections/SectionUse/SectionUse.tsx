
import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { ListItem } from '../../../utils/types/types'
import { Title } from '../../../utils/components/Title/Title'
import { StaticImage } from 'gatsby-plugin-image'
import { List } from '../../../utils/components/List/List'
import { cls } from '../../../utils/utils'

import * as styles from './SectionUse.module.scss'

export const SectionUse : FC = ( ) => {

  const listItems1 : ListItem = [
    '1-2 таблетки в день, 30-45 дней, с перерывом месяц',
  ]
  const listItems2 : ListItem = [
    'для взрослых и детей <strong>от 12 лет</strong> по 4 таблетки, каждые 4 часа',
    'в возрасте <strong>6–11 лет</strong> по 2 таблетки каждые 4 часа',
  ]

  return (
    <Section attributes={ {id: "section-use"} }>
      <Container>
        <Title>Как правильно принимать <span className="title-green">Фа Талай Джон</span> при простуде и гриппе:</Title>
        <div className={ styles.sectionUse__main }>
          <div className={ cls(styles.sectionUse__main_item, styles.sectionUse__main_item1) }>
            <div className={ styles.sectionUse__main_item__title }>Для профилактики заражения</div> 
            <List items={ listItems1 } className={ cls('list-orange', styles.sectionUse__main_item__list) } />
          </div>
          <div className={ cls(styles.sectionUse__main_item, styles.sectionUse__main_item2) }>
            <div className={ styles.sectionUse__main_item__title }>При первых симптомах вируса:</div> 
            <List items={ listItems2 } className={ cls('list-orange', styles.sectionUse__main_item__list) } />
            <div className={ styles.sectionUse__main_item__info }>Не более 7 дней</div> 
          </div>
          <div className={ styles.sectionUse__main_picture }>
            <StaticImage src="../../../assets/images/section-7_1__img.png" className={ styles.sectionUse__main_img } alt="Фа Талай Джон при простуде и гриппе" />
          </div>
        </div>
        <div className={styles.sectionUse__text}>
          <p><strong>Противопоказания:</strong><br />Индивидуальная непереносимость компонентов, период кормления, беременность, планируемая беременность</p>
          <p><strong>На один курс потребуется 1–2 упаковки (3–6 упаковок в год на одного человека)</strong></p>
        </div>
      </Container>
    </Section>
  )
}