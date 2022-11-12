import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/Layout/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="wrapper">
        <h1>Ошибка 404: страница не найдена</h1>
        <p><Link to="/">На главную</Link>.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Ошибка 404: страница не найдена - Фа Талай</title>
