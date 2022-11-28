import React, { FC, useState } from "react"
import { HeadFC, PageProps, Script } from "gatsby"
import { Section2 } from "../components/sections/Section2/Section2"
import { Layout } from "../components/Layout/Layout"
import { Section } from "../utils/components/Section/Section"
import { Title } from "../utils/components/Title/Title"
import { Container } from "../utils/components/Container/Container"
import { Section1 } from "../components/sections/Section1/Section1"
import { SectionAction } from "../components/sections/SectionAction/SectionAction"
import { Section4 } from "../components/sections/Section4/Section4"
import { SectionSostav } from "../components/sections/SectionSostav/SectionSostav"
import { Section6 } from "../components/sections/Section6/Section6"
import { SectionUse  } from "../components/sections/SectionUse/SectionUse"
import { Section8 } from "../components/sections/Section8/Section8"
import { SectionBottom } from "../components/sections/SectionBottom/SectionBottom"


const IndexPage: FC<PageProps> = () => {

  const [metrika, setMetrika] = useState(false);

  return (
    <Layout>
      <Section1 />
      <Section2 />
      <SectionAction />
      <Section4 />
      <SectionSostav />
      <Section6 />
      <SectionUse />
      <Section className="section-green">
        <Container>
          <Title className="title-center">Риск заболеваемости респираторными инфекциями снижается на 75% при приёме Фа Талай Джон на протяжении двух месяцев</Title>
        </Container>
      </Section>
      <Section8 />
      <SectionBottom />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => 
  <>
    <title>Фа Талай Джон - травяные таблетки от гриппа и простуды</title>
    <Script>
      {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
     
        ym(91414803, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true
        });
      `}
    </Script>

  </>
