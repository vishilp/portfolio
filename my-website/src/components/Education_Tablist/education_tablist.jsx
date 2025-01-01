import styles from './styles.module.css'
import uclaicon from '../../assets/ucla.jpg'

function Education_tablist(){
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
                    <img className={styles.icon} src ={uclaicon}/>
                        <div className={styles.textContainer}>
                            <p className={styles.date}> Sept 2020 - Sept 2024</p>
                            <p className={styles.location}>University of California, Los Angeles</p>
                            <p className={styles.role}>BS in Computational & Systems Biology</p>
                            <ul className={styles.description}>
                                <li>Educated in an interdisciplinary major that combines the sciences, mathematics, and computing to solve biological and computational problems.</li>
                                <li>Collaborated in a team environment to meet responsibilities and professional demands, such as monitoring gym members and equipment.</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
}

export default Education_tablist