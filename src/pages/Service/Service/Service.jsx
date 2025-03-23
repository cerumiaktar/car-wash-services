import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";


const Service = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex container mx-auto">
                <div className="w-6/12">
                    <LeftSide></LeftSide>
                </div>
                <div className="w-6/12">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Service;