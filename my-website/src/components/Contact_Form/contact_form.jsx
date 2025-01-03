import styles from './styles.module.css'

function Contact_Form(){
    return(
        <div className={styles.container}>
            <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="33c6ffdf-ab1d-4ff6-8c8d-1c55700ab407"></input>
                <div className={styles.top}>
                    <input className={styles.row1} type="text" required placeholder='Name' name='Name'></input>
                    <input className={styles.row1} type="text" required placeholder='Email' name='Email'></input>
                </div>
                <div className={styles.bottom}>
                    <textarea className={styles.row2} type="text" required placeholder='Send anything my way, be it work opportunities, criticism, or just a plain old hello...' name='Msg'></textarea>
                </div>
                <div className={styles.button}>
                    <input className={styles.submit} type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default Contact_Form