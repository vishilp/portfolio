import PDF from '../../assets/Resume.pdf'
import styles from './styles.module.css'

function SocialLinks(){
    return(
        <div className={styles.container}>
            <div className={styles.resumecontainer}>
                <a href={PDF} target="_blank">Resume</a>
            </div>
            <h2>hello</h2>
        </div>
    )
}

export default SocialLinks