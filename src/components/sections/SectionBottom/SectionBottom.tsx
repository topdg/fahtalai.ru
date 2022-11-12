
import React, { FC, useEffect, useRef, useState } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Section } from '../../../utils/components/Section/Section'
import { LiteratureProps } from '../../Literature/Literature.types'
import { SectionReviews } from '../SectionReviews/SectionReviews'
import { SectionAbout } from '../SectionAbout/SectionAbout'
import { Literature } from '../../Literature/Literature'
import { cls } from '../../../utils/utils'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './SectionBottom.module.scss'

export const SectionBottom : FC = ( ) => {
  
  const targetSection = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [translateX, setTranslateX] = useState(0);

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
    const currentScroll = window.pageYOffset + window.innerHeight;
    
    
    const elHeight = targetSection.current.offsetHeight;
    if (currentScroll > elementCoords.top && currentScroll < elementCoords.bottom + 100) {
      const res = (elementCoords.bottom - window.pageYOffset - window.innerHeight)/elHeight;
      setTranslateY(() => 80-100*res);
      setTranslateX(() => 100-100*res);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changePosition)
    
    return () => {
      window.removeEventListener("scroll", changePosition);
    }
  }, [])

  const literature : LiteratureProps = {
    title: 'Список используемых источников:',
    list: [
      "The Efficacy of Andrographis paniculata (Burm. f.) Wall. ex Nees for the Relief of the Symptoms of Influenza",
      "Thai Cabinet Approves Use of Fah Talai Jone to Treat Asymptomatic COVID-19 Cases",
      "COVID-19: How Thailand is using a 'cheap and effective' traditional herbal medicine to treat coronavirus",
      "COVID-19: Thai prisoners harvest a traditional herbal remedy",
      "The efficacy of Andrographis paniculata (Burm.f.) Wall. ex Nees crude extract in hospitalised mild COVID-19 patients: a retrospective cohort study",
      "ANDROGRAPHIS",
      "Инструкция по применению к биологически активной добавке Фата Лай Джон",
      "Experimental and Clinical Pharmacology of Andrographis paniculata and Its Major Bioactive Phytoconstituent Andrographolide",
    ]
  }

  return (
    <Section 
      ref={targetSection}
      className={ cls('section-lightgreen', styles.sectionBottom) } 
      attributes={ {id: "section-use"} }
    >
      <div className={ styles.sectionBottom__bg } style={ {top: `${translateY-20}%`, transform: `translateX(${(translateX>50?(translateX-100):-translateX)+20}%)`} }>
        <StaticImage 
          src="../../../assets/images/section-reviews__img.png" 
          className={ styles.sectionBottom__img }
          alt="Фоновая картинка" 
        />
      </div>
      <div className={ styles.sectionBottom__content }>
        <SectionReviews />
        <SectionAbout />
        <Container>
          <Literature {...literature} />
        </Container>
      </div>
    </Section>
  )
}