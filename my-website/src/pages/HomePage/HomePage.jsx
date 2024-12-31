import Education_tablist from "../../components/Education_Tablist/education_tablist"
import Intro from "../../components/Intro/intro"
import Tablist from "../../components/Tablist/Tablist"
import Work_tablist from "../../components/Work_Tablist/work_tablist"

function HomePage(){
    return(
        <>
         <Intro/>
         <Tablist/>
         <Work_tablist/>
         <Education_tablist/>
        </>
    )
}

export default HomePage