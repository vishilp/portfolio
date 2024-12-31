import styles from './styles.module.css'
import Work_tablist from '../Work_Tablist/work_tablist'
import Education_tablist from '../Education_Tablist/education_tablist'
import { useState } from 'react'

function Tablist(){
    const [activeTab, setActiveTab] = useState("Work")
    const setWork = () => {
        setActiveTab("Work")
    }
    const setEducation = () => {
        setActiveTab("Education")
    }
    return(
        <>
        <div className={styles.container}>
            <button className={styles.button} onClick={setWork}>Work</button>
            <button className={styles.button} onClick={setEducation}>Education</button>
        </div>
        {activeTab === "Work" ? <Work_tablist/> : <Education_tablist/>}
        </>
    )
}

export default Tablist