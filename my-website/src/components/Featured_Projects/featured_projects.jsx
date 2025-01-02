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
                        <p className={styles.description}>Project that covers game development, graph search algorithms,
                            dynamic memory allocation, polymorphism, object oriented design and artificial intelligence.</p>
                        <div className={styles.tools}>
                            <p className={styles.tool}>C</p>
                            <p className={styles.tool}>C++</p>
                            <p className={styles.tool}>SDL2</p>
                        </div>
                        <a href="https://github.com/vishilp/pac-man" target="_blank">
                            <button className={styles.sourceCode}>Source</button>
                        </a>
                    </div>
                </div>
                <div className={styles.projectsquare}>
                    <img src= {Realtor} className={styles.picture}/>
                    <div className={styles.cardholder}>
                        <p className={styles.title}>Realtor Information Scraper</p>
                        <p className={styles.description}>Automated finding property information for a small business leading to increase in customer
                        acquisition, sales, and productivity. Investigated techniques for browser automation and scraping.</p>
                        <div className={styles.tools}>
                            <p className={styles.tool}>Python</p>
                            <p className={styles.tool}>Selenium</p>
                            <p className={styles.tool}>Google API</p>
                        </div>
                        <a href="https://github.com/vishilp/SQFTFinder" target="_blank">
                            <button className={styles.sourceCode}>Source</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured_Projects