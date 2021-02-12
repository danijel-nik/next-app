import styles from '../styles/Article.module.css'
import Link from 'next/link'

const ArticleItem = ({ article }) => {
    return (
        <Link href="/articles/[id]" as={`/articles/${article.id}`}>
            <a className={styles.card}>
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem