import Featured_Projects from "../../components/Featured_Projects/featured_projects"
import Intro from "../../components/Intro/intro"
import Tablist from "../../components/Tablist/Tablist"

function HomePage(){
    return(
        <>
        <div style={{marginBottom: '4vh', marginTop: '2vh'}}>
            <Intro/>
        </div>
         <Tablist/>
         <Featured_Projects/>
        </>
    )
}

export default HomePage