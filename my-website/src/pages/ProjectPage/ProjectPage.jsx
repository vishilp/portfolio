import Project_Cards from "../../components/Project_Cards/project_cards"
import styles from './styles.module.css'

function ProjectPage(){
    return(
        <div>
            <h1 className={styles.header}>my projects</h1>
            <div className={styles.cards}>
                <Project_Cards/>
            </div>
        </div>
    )
}

export default ProjectPage