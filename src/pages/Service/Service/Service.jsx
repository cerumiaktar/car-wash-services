import Banner from "../Banner/Banner";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";


const Service = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="flex flex-col md:flex-row gap-10 container mx-auto">
                <div className="md:w-6/12">
                    <LeftSide></LeftSide>
                </div>
                <div className="md:w-6/12">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Service;