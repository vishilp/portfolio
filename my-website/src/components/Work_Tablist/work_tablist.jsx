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
                        <li>Developed SaVanT, a Python based bioinformatics tool use to visualize the expression of molecular signatures across multiple samples.</li>
                        <li>The objective of the tool was to utilize statistical mechanisms to aid a priori clinical patient diagnosis.</li>
                        <li>Collaborated with cross-functional teams, including bioinformaticians and software engineers, to refine and enhance tool functionality based on user feedback.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.workContainer}>

            </div>
        </div>
    )
}

export default Work_tablist