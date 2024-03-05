import HeroMakeup from "./HeroMakeup"
import HeroSkin from "./HeroSkin"
import HeroHair from "./HeroHair"
import HeroPersonalCare from "./HeroPersonalCare"
import HeroMombaby from "./HeroMomBaby"
import Herofragrance from "./HeroFragrance"
import HeroAyurveda from "./HeroAyurveda"

function HeroSection() {

    return (
        <> 
               <h1 style={{marginTop:"100px",marginLeft:"50px",fontWeight:"bolder",fontFamily:"sans-serif"}}>All Categories</h1>
               <div style={{width :"90px",marginLeft:"50px",height:"30px",marginTop:"10px"}}>
               <HeroMakeup/>
                <HeroSkin/>
                <HeroHair/>
                <HeroPersonalCare/>
                <HeroMombaby/>
                <Herofragrance/>
                <HeroAyurveda/>
               </div>
        </>
    )
}

export default HeroSection