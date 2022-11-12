import { StaticImage } from 'gatsby-plugin-image'
import React, { FC, useEffect, useRef, useState } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { Title } from '../../../utils/components/Title/Title'

import * as styles from './SectionSostav.module.scss'

export const SectionSostav : FC = () => {

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
    const currentScroll = window.pageYOffset + window.innerHeight*.6;
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
    <Section ref={targetSection} className={styles.sectionSostav} attributes={ {id: "section-sostav"} }>
      <div className={ styles.sectionSostav__picture } style={ { transform: `translateY(${-translate/2}px) rotate(${translate / 30}deg)`} }>
        <StaticImage src='../../../assets/images/section-8__bg.png' className={ styles.sectionSostav__img } alt="растительный состав" />
      </div>
      <div className={ styles.sectionSostav__bg_block } style={ { transform: `translateY(${-translate/5}px)`} } />
      <Container className={ styles.sectionSostav__container }>
        <div className={styles.sectionSostav__content}>
          <Title>100% натуральный растительный состав<sup>8</sup></Title>
          <div className={ styles.sectionSostav__text }><strong>Андрографис метельчатый</strong> — лекарственное растение из Юго-Восточной Азии. В Таиланде он известен под названием Фа Талай Джон. В химический состав андрографиса входят более двадцати видов различных дитерпеноидных соединений и более десятка флавоноидов, которые обеспечивают биологическую активность растения. Экстракт андрографиса метельчатого оказывает антивоспалительное, жаропонижающее и укрепляющее воздействие. Антиоксидантные свойства андрографиса запускают функции естественной защиты, ограждая организм от патогенных микробов и реакций. Экстракт растения стимулирует выработку интерферона и повышает выработку антител к бактериям, которые атакуют организм</div>
          <div className={ styles.sectionSostav__main }>Противоинфекционные свойства андрографиса особо видимы в лечении заболеваний верхних дыхательных путей, профилактике насморка, кашля, лихорадки, простуды и других сезонных болезней у детей и взрослых. Андрографис известен как растение, которое используется для избавления от жара и лихорадки</div>
          <div className={ styles.sectionSostav__items }>
            <div className={ styles.sectionSostav__item} >
              <div className={ styles.sectionSostav__item_name }>Состав:</div>
              <div className={ styles.sectionSostav__item_value }>андрографис метельчатый — 352 мг, крахмал тапиоки 18 мг</div>
            </div>
            <div className={ styles.sectionSostav__item} >
              <div className={ styles.sectionSostav__item_name }>Вес таблетки:</div>
              <div className={ styles.sectionSostav__item_value }>0,37 г</div>
            </div>
            <div className={ styles.sectionSostav__item} >
              <div className={ styles.sectionSostav__item_name }>Штук в упаковке:</div>
              <div className={ styles.sectionSostav__item_value }>70 шт</div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
