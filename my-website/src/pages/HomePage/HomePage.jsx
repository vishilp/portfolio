import Intro from "../../components/Intro/intro"
import Tablist from "../../components/Tablist/Tablist"

function HomePage(){
    return(
        <>
        <div style={{marginBottom: '4vh', marginTop: '4vh'}}>
            <Intro/>
        </div>
         <Tablist/>
        </>
    )
}

export default HomePage