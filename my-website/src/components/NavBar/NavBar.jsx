import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { RxMoon } from "react-icons/rx";
import { LuSunMedium } from "react-icons/lu";
import { useState } from "react";

function NavBar(){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        const newTheme = (theme === 'light' ? 'dark' : 'light');
        setTheme(newTheme)
    }
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbarlinks}>
                <Link to="/" className={styles.link} >home</Link>
                <Link to="/projects" className={styles.link} >projects</Link>
                <Link to="/blog" className={styles.link} >blog</Link>
                <Link to="/contact" className={styles.link} >contact</Link>
            </div>
            <button onClick={toggleTheme} className={styles.switch}>
                {theme === 'light' ? <RxMoon size="20px" style={{color: 'rgb(157, 113, 238)'}}/> 
                : <LuSunMedium size="20px" style={{color: 'rgb(214, 204, 56)'}}/>}
            </button>
        </nav>
    )
}

export default NavBar;