import { Link } from "react-router-dom";
import styles from "./styles.module.css"

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbarlinks}>
                <Link to="/" className={styles.link} >home</Link>
                <Link to="/projects" className={styles.link} >projects</Link>
                <Link to="/blog" className={styles.link} >blog</Link>
                <Link to="/contact" className={styles.link} >contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;