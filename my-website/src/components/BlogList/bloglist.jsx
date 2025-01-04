import styles from './styles.module.css'

function BlogList(){
    return(
        <div className={styles.container}>
            <div className={styles.blog}>
                <div className={styles.row1}>
                    <h1 className={styles.title}>Making the Realtor Information Scraper</h1>
                    <p className={styles.date}>January 3, 2025</p>
                </div>
                <div className={styles.row2}>
                    <p className={styles.info}>The struggles and obstacles I faced creating a tool that automated finding property square footage for a 
                        small business.</p>
                </div>
            </div>
        </div>
    )
}

export default BlogList