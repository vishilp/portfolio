import styles from './styles.module.css'
import uclaicon from '../../assets/ucla.jpg'
import uclarecicon from '../../assets/uclarec.jpg'

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
                <img className={styles.icon} src ={uclarecicon}/>
                    <div className={styles.textContainer}>
                        <p className={styles.date}> June 2023 - June 2024</p>
                        <p className={styles.location}>Bruin Fitness Center (BFIT)</p>
                        <p className={styles.role}>Fitness Consultant</p>
                        <ul className={styles.description}>
                            <li>Provided exceptional customer service and support, addressed client inquiries and concerns promptly, and fostered a positive training environment.</li>
                            <li>Collaborated in a team environment to meet responsibilities and professional demands, such as monitoring gym members and equipment.</li>
                            <li>Trained and mentored junior fitness consultants or interns, sharing expertise and best practices to foster professional development and team growth.</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Work_tablist