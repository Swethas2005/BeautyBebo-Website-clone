import Skin from "../MakeupComponent/Skin";
import Eye from "../MakeupComponent/Eye";
import Face from "../MakeupComponent/Face";
import Body from "../MakeupComponent/Body";

function SkinContainer() {
    return (
        <>
         <Skin>
            <Eye />
            <Face />
            <Body />    
        </Skin> 
        </>
    );
}

export default SkinContainer