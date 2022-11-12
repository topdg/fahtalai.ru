
import React, { FC } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { cls } from '../../../utils/utils'

import * as styles from './SectionAbout.module.scss'

export const SectionAbout : FC = ( ) => {

  return (
    <div className={ styles.sectionAbout__row } id="section-about">
      <div className={ cls(styles.sectionAbout__item, styles.sectionAbout__item1) }>
        <div className={ styles.sectionAbout__item_content }>
          <div className={ styles.sectionAbout__item_title }>Производитель</div>
          <div className={ styles.sectionAbout__item_picture }>
            <StaticImage src="../../../assets/images/section-about__logo-1.png" alt="Логотип BAIHOR BRAND" />
          </div>
          <div className={ styles.sectionAbout__item_text }>
            <p><strong>BAIHOR BRAND входит в 5-ку самых крупных Тайских производителей растительных препаратов. 40 лет на рынке травяной медицины Таиланда</strong></p>
            <p>BAIHOR выпускает самые недорогие и общедоступные таблетки и капсулы растительного происхождения в Таиланде и по праву считается «народным» брэндом. Таблетки этого производителя есть в домашней аптечке практически каждой Тайской семьи.</p>
            <p>BAIHOR участвует в национальной программе по борьбе с пандемией COVID–19. Их таблетками Фа Талай Джон снабжаются все государственные лечебные учреждения Таиланда.</p>
          </div>
        </div>
      </div>
      <div className={ cls(styles.sectionAbout__item, styles.sectionAbout__item2) }>
        <div className={ styles.sectionAbout__item_content }>
          <div className={ styles.sectionAbout__item_title }>Дистрибьютор</div>
          <div className={ styles.sectionAbout__item_picture }>
            <StaticImage src="../../../assets/images/section-about__logo-2.png" alt="Логотип ООО «САБАЙ»" />
          </div>
          <div className={ styles.sectionAbout__item_text }>
            <p><strong>ООО «САБАЙ» официальный эксклюзивный дистрибьютор продукции BAIHOR BRAND PHARMACY импортер в России ООО "Сабай-Опт"</strong></p>
            <p>ООО «САБАЙ» получила первое в таможенном союзе СГР на Фа Талай Джон. С 2016 года в России не регистрировался ни один БАД или медпрепарат из Таиланда. Ранее компания BAIHOR экспортировала свою продукцию только в страны Азии, а теперь официально выходит на Российский рынок и готов поставлять до 3 000 000 упаковок Фа Талай Джон в год.</p>
            <p>ООО «САБАЙ» ведёт оформление СГР и на другие препараты линейки БАЙХОР и других Тайских производителей из разных ценовых категорий</p>
          </div>
        </div>
      </div>
    </div>
  )
}