import PDF from '../../assets/Resume.pdf'
import styles from './styles.module.css'

function SocialLinks(){
    return(
        <div className={styles.container}>
            <h1>Resume</h1>
            <a href={PDF} target="_blank">Resume</a>
            <h2>hello</h2>
        </div>
    )
}

export default SocialLinks