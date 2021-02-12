import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <h1 className={styles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={styles.description}>
                Keep updated with the latest wen dev news
            </p>
        </>
    )
}

export default Header