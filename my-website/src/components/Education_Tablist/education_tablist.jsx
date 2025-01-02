import styles from './styles.module.css'
import uclaicon from '../../assets/ucla.jpg'

function Education_tablist(){
    return(
            <div className={styles.container}>
                <div className={styles.workContainer}>
                    <img className={styles.icon} src ={uclaicon}/>
                    <div className={styles.textContainer}>
                        <p className={styles.date}> Jan 2025 - June 2026</p>
                        <p className={styles.location}>University of California, Los Angeles</p>
                        <p className={styles.role}>MS in Data Science in Biomedicine</p>
                        <ul className={styles.description}>
                            <li>Training in Data Science, Machine Learning, Statistics, Data Mining, Algorithms, and Analytics with applications to Genomics, Electronic Health Records, and Medical Images.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.workContainer}>
                    <img className={styles.icon} src ={uclaicon}/>
                        <div className={styles.textContainer} style={{marginBottom: "20px"}}>
                            <p className={styles.date}> Sept 2020 - Sept 2024</p>
                            <p className={styles.location}>University of California, Los Angeles</p>
                            <p className={styles.role}>BS in Computational & Systems Biology</p>
                            <ul className={styles.description}>
                                <li>Educated in an interdisciplinary major that combines the sciences, mathematics, and computing to solve biological and computational problems.</li>
                                <li>Applied quantitative and computational approaches to solve biological questions.</li>
                                <li>Developed a solid foundation in algorithms, data structures, and software engineering principles.</li>
                            </ul>
                        </div>
                </div>
            </div>
        )
}

export default Education_tablist