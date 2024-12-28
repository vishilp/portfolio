import styles from './styles.module.css'

function Intro(){
return(
    <div className={styles.container}> 
        <div className={styles.textcontainer}>
            <h1 className={styles.hi}>hi, i'm vishil👋</h1>
            <p className={styles.info1}>22 year old data science graduate student at UCLA</p>
            <p className={styles.info2}>I tinker with fun personal projects, lift heavy circles,
                and ocassionally indulge in donuts and cookies.
            </p>
        </div>
        <img className={styles.picture} src="https://i.imgur.com/WMEpDkQ.png"/>
    </div>
)
}

export default Intro