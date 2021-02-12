import { server } from '../../../config'
import {useRouter} from 'next/router'
import Link from 'next/link'

const article = ({ article }) => {
    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export default article

/*
// this function can be used for fetching data alone
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}
*/

// this is the second way for fetching data

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

// use getStaticPaths for dynamic generated pages and we need getStaticProps also
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles/`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}