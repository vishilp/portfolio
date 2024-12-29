import PDF from '../../assets/Resume.pdf'
import styles from './styles.module.css'
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { CiMail } from "react-icons/ci";

function SocialLinks(){
    return(
        <div className={styles.container}>
            <a href={PDF} target="_blank" style={{textDecoration: 'none'}}>
                <button className={styles.resumebutton}>Resume
                    <HiOutlineDocumentDownload size="20px"/>
                </button>
            </a>
            <a href={"https://www.linkedin.com/in/vishilpatel/"} target="_blank">
                <SlSocialLinkedin size= '20px' color= '#666666' className={styles.link} style={{marginTop: '4px'}}/>
            </a>
            <a href={"https://github.com/vishilp"} target="_blank">
                <VscGithubAlt size= '20px' color='#666666' className={styles.link} style={{marginTop: '8px'}}/>
            </a>
            <a href={"mailto:vishilp@g.ucla.edu"} target="_blank">
                <CiMail size= '20px' color='#666666' className={styles.link} style={{marginTop: '8px'}}/>
            </a>
        </div>
    )
}

export default SocialLinks