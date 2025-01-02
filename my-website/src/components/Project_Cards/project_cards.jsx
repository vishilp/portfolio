import styles from './styles.module.css'
import PacMan from '../../assets/pac-man.jpg'
import Realtor from '../../assets/realtor.jpeg'
import MovieApp from '../../assets/movieapp.png'
import Uber from '../../assets/uber.jpg'

function Project_Cards(){
    return(
        <div className={styles.container}>
            
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

            <div className={styles.projectsquare}>
                <img src= {MovieApp} className={styles.picture}/>
                <div className={styles.cardholder}>
                    <p className={styles.title}>Movie App</p>
                    <p className={styles.description}>This project was mainly for 
                        me to learn how React works, specifically the component-based 
                        design and React hooks like useState, useEffect, and Contexts.</p>
                    <div className={styles.tools}>
                        <p className={styles.tool}>React</p>
                        <p className={styles.tool}>JavaScript</p>
                        <p className={styles.tool}>HTML</p>
                        <p className={styles.tool}>CSS</p>
                    </div>
                    <a href="https://github.com/vishilp/MovieApp" target="_blank">
                        <button className={styles.sourceCode}>Source</button>
                    </a>
                </div>
            </div>

            <div className={styles.projectsquare}>
                <img src= {Uber} className={styles.picture}/>
                <div className={styles.cardholder}>
                    <p className={styles.title}>Uber Clone</p>
                    <p className={styles.description}>Android application development through 
                        the React-Native framework. Features a Home Screen, Search Screen, and Order Screen.</p>
                    <div className={styles.tools}>
                        <p className={styles.tool}>React Native</p>
                        <p className={styles.tool}>JavaScript</p>
                        <p className={styles.tool}>HTML</p>
                        <p className={styles.tool}>CSS</p>
                        <p className={styles.tool}>Google API</p>
                    </div>
                    <a href="https://github.com/vishilp/Uber" target="_blank">
                        <button className={styles.sourceCode}>Source</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Project_Cards