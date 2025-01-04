import BlogList from '../../components/BlogList/bloglist'
import styles from './styles.module.css'

function BlogPage(){
    return(
        <div>
            <h1 className={styles.header}>my blog</h1>
            <BlogList/>
            <p className={styles.soon}>more to come soon...</p>
        </div>
    )
}

export default BlogPage