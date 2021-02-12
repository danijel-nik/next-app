import { server } from '../config'
import ArticleList from '../components/ArticleList'

const home = ({ articles }) => {
  return (
    <>
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