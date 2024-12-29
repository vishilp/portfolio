import styles from './styles.module.css'

function Tablist(){
    return(
        <div className={styles.container}>
            <button className={styles.button}>Work</button>
            <button className={styles.button}>Education</button>
        </div>
    )
}

export default Tablist