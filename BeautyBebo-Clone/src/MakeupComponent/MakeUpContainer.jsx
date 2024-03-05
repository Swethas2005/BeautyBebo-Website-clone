import Makeup from "../MakeupComponent/Makeup";
import Eye from "../MakeupComponent/Eye";
import Lip from "../MakeupComponent/Lip";
import Face from "../MakeupComponent/Face";
import ToolBrushes from "../MakeupComponent/ToolBrushes";

function MakeUpContainer() {
    return (
        <>
         <Makeup>
            <Eye />
            <Lip />
            <Face />
            <ToolBrushes />
        </Makeup>    
        </>
    );
}

export default MakeUpContainer