import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

const home = ({ articles }) => {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming, coding" />
      </Head>

      <ArticleList articles={articles} />
    </>
  )
}
export default home

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}