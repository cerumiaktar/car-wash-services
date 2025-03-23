import { IoArrowForward } from "react-icons/io5";

const RightSide = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] rounded-xl p-10 space-y-6">
                <h2 className="text-2xl font-bold">Services</h2>
                <div className="px-5 py-4 bg-[#FF3811] text-white flex items-center justify-between rounded-md">
                    <h3 className="text-lg font-medium">Full Car Repair</h3>
                    <p className="text-xl"><IoArrowForward /></p>
                </div>
                <div className="px-5 py-4 bg-white flex items-center justify-between rounded-md">
                    <h3 className="text-lg font-medium ">Engine Repair</h3>
                    <p className="text-xl text-[#FF3811]"><IoArrowForward /></p>
                </div>
                <div className="px-5 py-4  bg-white flex items-center justify-between rounded-md">
                    <h3 className="text-lg font-medium">Automatic Services</h3>
                    <p className="text-xl text-[#FF3811]"><IoArrowForward /></p>
                </div>
                <div className="px-5 py-4 bg-white flex items-center justify-between rounded-md">
                    <h3 className="text-lg font-medium">Engine Oil Change</h3>
                    <p className="text-xl text-[#FF3811]"><IoArrowForward /></p>
                </div>
                <div className="px-5 py-4 bg-white flex items-center justify-between rounded-md">
                    <h3 className="text-lg font-medium">Battery Charge</h3>
                    <p className="text-xl text-[#FF3811]"><IoArrowForward /></p>
                </div>
            </div>
        </div>
    );
};

export default RightSide;