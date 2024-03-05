import PersonalCare from "../MakeupComponent/PersonalCare";
import BathBody from "../MakeupComponent/BathBody";
import BathingAccessories from "../MakeupComponent/BathingAccessories";
import BathShower from "../MakeupComponent/BathShower";

function MomBabyCare() {
    return (
        <>
            <PersonalCare>
                <BathBody/>
                <BathingAccessories/>
                <BathShower/>
            </PersonalCare>
        </>
    );
}

export default MomBabyCare