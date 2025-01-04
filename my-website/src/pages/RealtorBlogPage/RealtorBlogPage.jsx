import { FaArrowLeft } from "react-icons/fa";
import  styles from './styles.module.css'
import { Link } from "react-router-dom";
import code from '../../assets/code.jpg'

function RealtorBlogPage(){
    return(
        <div>
            <div className={styles.backbutton}>
                <Link to="/blog" className={styles.link}>
                <FaArrowLeft size = "16px" className={styles.arrow}/>
                back to blog</Link>
            </div>
            <div className={styles.piccontainer}>
                <img src={code} className={styles.picture}/>
            </div>
            <div className={styles.header}>
                <h1 className={styles.title}>What I learned through Web Scraping Realtor</h1>
                <p className={styles.date}>January 3, 2025</p>
            </div>
            <div className={styles.content}>
                <p className={styles.description}>An old friend from high school recently started his own business involving installing solar panels and handy services like window panel cleaning or outdoor light installation.
                An inconvenient aspect of his start-up was manually looking up the square footage of houses and recording them in an excel sheet. This data would be used to estimate service charges. 
                As a result, he asked me if I knew any way to automate it, preferably with no cost. Despite not having experience in web-scraping, I figured it would be a fun project. I was definitely wrong. 
                </p>
                <h1 className={styles.contenttitle}>Project Beginnings</h1>
                <p></p>
            </div>
        </div>
    )
}

export default RealtorBlogPage