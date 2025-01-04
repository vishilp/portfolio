import styles from './styles.module.css'
import { Link } from 'react-router-dom'

function BlogList(){
    return(
        <div className={styles.container}>
            <Link to="/blog/realtor" className={styles.blog}>
                <div className={styles.row1}>
                    <h1 className={styles.title}>Making the Realtor Information Scraper</h1>
                    <p className={styles.date}>January 3, 2025</p>
                </div>
                <div className={styles.row2}>
                    <p className={styles.info}>Sometimes you must travel down a very complicated and frustrating route to find a solution that is right in front of your face.</p>
                </div>
            </Link>
        </div>
    )
}

export default BlogList