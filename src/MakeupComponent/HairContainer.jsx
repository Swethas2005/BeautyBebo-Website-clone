import Hair from "../MakeupComponent/Hair";
import HairCare  from "../MakeupComponent/Hair";
import HairLoss  from "../MakeupComponent/Hair";

function HairContainer() {
    return (
        <>
         <Hair>
            <HairCare/>
            <HairLoss/>
         </Hair>
        </>
    );
}

export default HairContainer