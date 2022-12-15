
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
      name: "Василисса&nbsp;Г.",
      date: "21.11.2022",
      logo: data.icons.edges[0].node.childImageSharp.gatsbyImageData,
      url: "https://www.ozon.ru/product/fa-talay-dzhon-tabletki-fah-talai-jone-baihor-brand-tailand-743149089/?from=share_ios&from=share_ios&sh=xWVTrWeGrQ&utm_campaign=productpage_link&utm_medium=share_button&utm_source=smm",
      stars: 5,
      text: "В сентября мы всей семьей начали болеть. Сначала вирусы принесла из сада младшая дочь, потом приболел муж. У нас в семье пожилые родителям, и я стала бояться, что они тоже заболеют. Маме 89 лет, отцу 85. Решила обратиться к остеопату, к которому Ходим уже Давно всей семьей. Он недавно вернулся из Тайланда и восхищался потрясающе крепким здоровьем тайцев. Оказывается, во времена пандемии, у них была сама низкая смертность! Он объяснил это тем, что тайцам в поликлиниках давали для профилактики растительный иммуностимулятор. Препарат называется Фаталай Джон от Baihor. Вечером нашла этот препарат в интернете, на следующий день забрала из пункта доставки. Стала давать родителям, и сама пить. Удивительно, но несмотря на то, что вокруг нас все время были болеющие, сами мы не заболели. Очень рада, что нашла этот препарат, сэкономили деньги на больничных, и пережили пандемию всей семьей! ",
    },
    {
      name: "Анна С.",
      date: "02.11.2022",
      logo: data.icons.edges[0].node.childImageSharp.gatsbyImageData,
      url: "https://www.ozon.ru/product/fa-talay-dzhon-tabletki-fah-talai-jone-baihor-brand-tailand-743149089/?from=share_ios&from=share_ios&sh=xWVTrWeGrQ&utm_campaign=productpage_link&utm_medium=share_button&utm_source=smm",
      stars: 5,
      text: "Быстро и эффективно действует!<br>Фаталай Джон от Baihor - это просто находка! Скорей всего, если бы я прочитала о нем в интернете, я бы даже не поверила, что это такой чудодейственный препарат. Но я оказалась в безвыходной ситуации, так как мы поехали с мужем на отдых в Тайланд и меня в первый день застал какой-то непонятный вирус, в России это бы назвали гриппом, поэтому пришлось купить то, что посоветовал фармацевт в аптеке, сказав, что Фаталай Джон есть в аптечке каждого дома в Тае, это и вызвало доверие. Таблетки Фаталай Джон от Baihor очень эффективные! Вечером я выпила сразу 4 штучки, горечь от таблеток, обволокла все горло, было ощущение как будто я жую какую-то жгучую траву, но зато на утро горло полностью прошло и все симптомы ушли тоже.",
    },
    {
      name: "Лидия",
      date: "28.09.2022",
      logo: data.icons.edges[0].node.childImageSharp.gatsbyImageData,
      url: "https://www.ozon.ru/product/fa-talay-dzhon-tabletki-fah-talai-jone-baihor-brand-tailand-743149089/?from=share_ios&from=share_ios&sh=xWVTrWeGrQ&utm_campaign=productpage_link&utm_medium=share_button&utm_source=smm",
      stars: 5,
      text: "Пьём для профилактики орви и гриппа всей семьёй по 1 таблетке в день после еды. Таблетки не горькие, пьёт даже ребёнок 9 лет. У меня вылез было герпес внутри слизистой носа, но после приёма этих таблеток, быстро прошёл, за несколько дней. У сына был кашель и заложенность носа, которую уже лечили, а получив андрографис, то есть эти таблетки, и начав их принимать, лечение пошло быстрее. Как я понимаю, это природный антибиотик. Рекомендую, хорошая вещь",
    },
    {
      name: "Ольга Б.",
      date: "26.09.2022",
      logo: data.icons.edges[1].node.childImageSharp.gatsbyImageData,
      url: "https://www.wildberries.ru/catalog/59275473/feedbacks?imtId=44647327&size=106309629#VIrsBoQBXuaGXcNp226b",
      stars: 5,
      text: "Отличный натуральный препарат. Пьём всей семьёй в качестве профилактики в сезон простуды. Хорошо снимает жар и ломоту в теле при повышенной температуре. Аллергических реакций не наблюдалось.",
    },
    {
      name: "Ольга Б.",
      date: "26.09.2022",
      logo: data.icons.edges[1].node.childImageSharp.gatsbyImageData,
      url: "https://www.wildberries.ru/catalog/59275473/feedbacks?imtId=44647327&size=106309629#VIrsBoQBXuaGXcNp226b",
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