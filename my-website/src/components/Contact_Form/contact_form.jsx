import styles from './styles.module.css'
import { useState } from 'react';

function Contact_Form(){
    const [result, setResult] = useState("Send Message");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "33c6ffdf-ab1d-4ff6-8c8d-1c55700ab407");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return(
        
        <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.top}>
                    <input className={styles.row1} type="text" required placeholder='Name' name='Name'></input>
                    <input className={styles.row1} type="text" required placeholder='Email' name='Email'></input>
                </div>
                <div className={styles.bottom}>
                    <textarea className={styles.row2} type="text" required placeholder='Send anything my way, be it work opportunities, criticism, or just a plain old hello...' name='Msg'></textarea>
                </div>
                <div className={styles.button}>
                    <input className={styles.submit} type="submit" value={result}></input>
                </div>
            </form>
        </div>
        
    )
}

export default Contact_Form