import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import React, { FC } from 'react'
import { SectionReviewsProps } from './SectionReviews.types'

import * as styles from './SectionReviews.module.scss'

export const SectionReviewsCard : FC<SectionReviewsProps> = ({ name, date, logo, stars, text, url }) => {

  return (
    <div className={ styles.sectionReviews__Card }>
      <div className={ styles.sectionReviews__Card_content }>
        <div className={ styles.sectionReviews__Card_head }>
          <div className={ styles.sectionReviews__Card_info }>
            {
              name &&
              <div className={ styles.sectionReviews__Card_name }>{ name }</div>
            }
            {
              date &&
              <div className={ styles.sectionReviews__Card_date }>{ date }</div>
            }
          </div>
          {
            url 
            ?
            <a href={ url } target="_blank" className={ styles.sectionReviews__Card_logo }>
              {logo ? <GatsbyImage image={logo} alt="Логотип платформы" /> : 'Источник'}
            </a>
            :
            logo && <GatsbyImage image={logo} alt="Логотип платформы" />
          }
        </div>
        {
          stars && 
          <div className={ styles.sectionReviews__Card_stars }>
            {
              Array.from(Array(stars), (el, i) => <StaticImage key={i} src="../../../assets/images/icon-star.svg" alt="" />)
            }
          </div>
        }
        <div className={ styles.sectionReviews__Card_text }> { text } </div>
      </div>
    </div>
  )
}
