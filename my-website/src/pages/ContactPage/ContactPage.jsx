import Contact_Form from "../../components/Contact_Form/contact_form"
import styles from './styles.module.css'

function ContactPage(){
    return(
        <div>
            <h1 className={styles.header}>contact me</h1>
            <div className={styles.form}>
                <Contact_Form/>
            </div>
        </div>
    )
}

export default ContactPage