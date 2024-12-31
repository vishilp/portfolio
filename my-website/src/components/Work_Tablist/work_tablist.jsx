import styles from './styles.module.css'
import uclaicon from '../../assets/ucla.png'

function Work_tablist(){
    return(
        <div className={styles.container}>
            <div className={styles.workContainer}>
                <img className={styles.icon} src ={uclaicon}/>
                <div className={styles.textContainer}>
                    <p className={styles.date}> Sept 2023 - Sept 2024</p>
                    <p className={styles.location}>University of California, Los Angeles</p>
                    <p className={styles.role}>Software Developer</p>
                    <ul className={styles.description}>
                        <li>Developed utilizing Python and the Streamlit framework. Focused on organizing the code to allow future developers to update the tool with minimal effort.</li>
                        <li>Showcases an extensive directory of molecular signatures from leading databases like MSigDB and Enrichr. </li>
                    </ul>
                </div>
            </div>
            <div className={styles.workContainer}>

            </div>
        </div>
    )
}

export default Work_tablist