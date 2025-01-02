import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import PacMan from '../../assets/pac-man.jpg'
import Realtor from '../../assets/realtor.jpeg'

function Featured_Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.headertext}>featured projects</h1>
                <div className={styles.linkcontainer}>
                    <Link to="/projects" className={styles.link} >view more</Link>
                    <FaArrowRight className={styles.arrow} size= "16px"/>
                </div>
            </div>
            <div className={styles.projects}>
                <div className={styles.projectsquare}>
                    <img src= {PacMan} className={styles.picture}/>
                    <div className={styles.cardholder}>
                        <p className={styles.title}>PacMan Clone</p>
                        <p className={styles.description}>C++ clone that covers game development, 
                            dynamic memory allocation, polymorphism, object oriented design and artificial intelligence.</p>
                        <div className={styles.tools}>
                            
                        </div>
                        <button className={styles.sourceCode}>Source</button>
                    </div>
                </div>
                <div className={styles.projectsquare}>
                    <img src={Realtor} className={styles.picture}/>
                    <p className={styles.title}>Realtor Information Scraper</p>
                    <p className={styles.description}></p>
                    <div className={styles.tools}></div>
                    <button className={styles.sourceCode}></button>
                </div>

            </div>
        </div>
    )
}

export default Featured_Projects