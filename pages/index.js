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
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}