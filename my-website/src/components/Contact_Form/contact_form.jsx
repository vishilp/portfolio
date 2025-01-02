import styles from './styles.module.css'

function Contact_Form(){
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div>
                    <input className={styles.row1} type="text" required placeholder='Name' name='fname'></input>
                    <input className={styles.row1} type="text" required placeholder='Email' name='femail'></input>
                </div>
                <div>
                    <input className={styles.row2} type="text" required placeholder='Write me anything and 
                    I will get back to you when I can' name='fmsg'></input>
                </div>
            </form>
        </div>
    )
}

export default Contact_Form