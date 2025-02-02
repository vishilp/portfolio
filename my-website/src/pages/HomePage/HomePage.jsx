import Featured_Projects from "../../components/Featured_Projects/featured_projects"
import Intro from "../../components/Intro/intro"
import Tablist from "../../components/Tablist/Tablist"

function HomePage(){
    return(
        <>
        <div style={{marginBottom: '6vh', marginTop: '2vh'}}>
            <Intro/>
        </div>
        <div style={{marginBottom: '6vh'}}>
            <Tablist/>
        </div>
        <div style={{marginBottom: '10vh'}}>
            <Featured_Projects/>
        </div>
        </>
    )
}

export default HomePage