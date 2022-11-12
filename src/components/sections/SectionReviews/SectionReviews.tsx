
import React, { FC } from 'react'
import { Container } from '../../../utils/components/Container/Container'
import { Title } from '../../../utils/components/Title/Title'
import { SectionReviewsCard } from './SectionReviewsCard'
import { SectionReviewsProps } from './SectionReviews.types'
import { Swiper, SwiperSlide } from 'swiper/react';
import { graphql, useStaticQuery } from 'gatsby'

import 'swiper/css';

import * as styles from './SectionReviews.module.scss'

export const SectionReviews : FC = ( ) => {

  const data = useStaticQuery(graphql`
    query {
      icons: allFile(filter: {name: {in: ["logo-ozon", "logo-wildberries"]}}) {
        edges {
          node {
            publicURL
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const reviews : SectionReviewsProps[] = [
    {
      name: "Лидия",
      date: "28.09.2022",
      logo: data.icons.edges[0].node.childImageSharp.gatsbyImageData,
      url: "https://www.wildberries.ru/catalog/59275473/feedbacks?imtId=44647327&size=106309629#VIrsBoQBXuaGXcNp226b",
      stars: 5,
      text: "Пьём для профилактики орви и гриппа всей семьёй по 1 таблетке в день после еды. Таблетки не горькие, пьёт даже ребёнок 9 лет. У меня вылез было герпес внутри слизистой носа, но после приёма этих таблеток, быстро прошёл, за несколько дней. У сына был кашель и заложенность носа, которую уже лечили, а получив андрографис, то есть эти таблетки, и начав их принимать, лечение пошло быстрее. Как я понимаю, это природный антибиотик. Рекомендую, хорошая вещь",
    },
    {
      name: "Лидия",
      date: "28.09.2022",
      logo: data.icons.edges[0].node.childImageSharp.gatsbyImageData,
      url: "https://www.wildberries.ru/catalog/59275473/feedbacks?imtId=44647327&size=106309629#VIrsBoQBXuaGXcNp226b",
      stars: 5,
      text: "Пьём для профилактики орви и гриппа всей семьёй по 1 таблетке в день после еды. Таблетки не горькие, пьёт даже ребёнок 9 лет. У меня вылез было герпес внутри слизистой носа, но после приёма этих таблеток, быстро прошёл, за несколько дней. У сына был кашель и заложенность носа, которую уже лечили, а получив андрографис, то есть эти таблетки, и начав их принимать, лечение пошло быстрее. Как я понимаю, это природный антибиотик. Рекомендую, хорошая вещь",
    },
    {
      name: "Ольга Б.",
      date: "26.09.2022",
      logo: data.icons.edges[1].node.childImageSharp.gatsbyImageData,
      url: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE&product_id=743149088",
      stars: 5,
      text: "Отличный натуральный препарат. Пьём всей семьёй в качестве профилактики в сезон простуды. Хорошо снимает жар и ломоту в теле при повышенной температуре. Аллергических реакций не наблюдалось.",
    },
    {
      name: "Ольга Б.",
      date: "26.09.2022",
      logo: data.icons.edges[1].node.childImageSharp.gatsbyImageData,
      url: "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%D0%BE&product_id=743149088",
      stars: 5,
      text: "работает! проверила на своей затяжной простуде, как только начала пить эти волшебные таблетки за пару дней от простуды не осталось и следа!",
    },
  ]

  return (
    <Container attributes={{id: "section-reviews"}}>
      <div className={ styles.sectionReviews__content }>
        <Title>Независимые отзывы о Фа Талай Джон</Title>
        <div className={ styles.sectionReviews__subtitle }>чтобы прочитать полный текст отзыва, нажмите на логотип над ним</div>
        <div className={ styles.sectionReviews__items }>
        <Swiper
          spaceBetween={16}
          slidesPerView={4}
          breakpoints={
            {
              300: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 16
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 16
              },
            }
          }
        >
          {
            reviews.map((el, i) => 
              <SwiperSlide key={i}>
                <SectionReviewsCard  {...el}/>
              </SwiperSlide>
            )
          }
        </Swiper>
        </div>
      </div>
    </Container>
  )
}