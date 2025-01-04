import { FaArrowLeft } from "react-icons/fa";
import  styles from './styles.module.css'
import { Link } from "react-router-dom";

function RealtorBlogPage(){
    return(
        <div>
            <div className={styles.backbutton}>
                <Link to="/blog" className={styles.link}>
                <FaArrowLeft size = "16px" className={styles.arrow}/>
                back to blog</Link>
            </div>
        </div>
    )
}

export default RealtorBlogPage