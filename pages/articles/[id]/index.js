import { server } from '../../../config'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Meta from '../../../components/Meta'

const article = ({ article }) => {
    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
            <Meta title={`${article.title} | WebDev`} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export default article

/*
// *** This function can be used for fetching data alone

// getServerSideProps doesn't cache data to server, but it has a lot of options for 'context' object such as: req, res, statusCode, query, params ...
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

// *** This is the second way for fetching data

// getStaticProps caches data to server, which means that loading will be little slow for first user since it does caching, 
// while it will be much faster for the others (let's say for million users) since they will getting static HTML page
export const getStaticProps = async (context) => {
    // From here you can do DB calls, requests without being CORS binded, require files with common js syntax or dynamic import ....
     
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        },
        revalidate: 10 // at most 1 request to the server per 10 seconds
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