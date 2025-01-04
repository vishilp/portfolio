import SocialLinks from '../SocialLinks/sociallinks'
import styles from './styles.module.css'

function Intro(){
return(
    <div className={styles.container}> 
        <div className={styles.textcontainer}>
            <h1 className={styles.hi}>hi, i'm vishil👋</h1>
            <p className={styles.info1}>Data science grad student at UCLA</p>
            <p className={styles.info2}>Software Developer that enjoys learning tools and technologies through diverse personal projects
            </p>
            <SocialLinks/>
        </div>
        <img className={styles.picture} src="https://i.imgur.com/WMEpDkQ.png"/>
    </div>
)
}

export default Intro