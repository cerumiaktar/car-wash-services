import { IoArrowForward } from "react-icons/io5";
import { LuFileChartColumn } from "react-icons/lu";

const RightSide = () => {
    return (
        <div>
            <div className="bg-[#F3F3F3] rounded-xl p-10 space-y-6 mb-8">
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
            <div className="bg-[#151515] p-10 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-white mb-8">Download</h2>
                <div className="flex items-center justify-between">
                    <div className="text-white flex items-center gap-2">
                        <p className="text-4xl"><LuFileChartColumn /></p>
                        <div>
                            <h2 className="text-xl font-medium">Our Brochure</h2>
                            <p className="text-[#A2A2A2]">Download</p>
                        </div>
                    </div>
                    <div className="bg-[#FF3811] p-4 rounded-md w-14">
                        <p className="text-white text-2xl"><IoArrowForward /></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="text-white flex items-center gap-2">
                        <p className="text-4xl"><LuFileChartColumn /></p>
                        <div>
                            <h2 className="text-xl font-medium">Company Details</h2>
                            <p className="text-[#A2A2A2]">Download</p>
                        </div>
                    </div>
                    <div className="bg-[#FF3811] p-4 rounded-md w-14">
                        <p className="text-white text-2xl"><IoArrowForward /></p>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515] p-10 rounded-xl text-center space-y-6">
                <img className="mx-auto" src="https://i.ibb.co.com/tdTVt2P/Group-2-1.png" alt="" />
                <h2 className="text-white text-lg font-medium">Need Help? We Are Here To Help You</h2>
                <div className="flex justify-center">
                    <div className="bg-white w-[270px] rounded-lg px-11 py-4 space-y-2">
                        <h2 className="text-xl font-medium">Car Doctor Special</h2>
                        <p className="text-[#737373]">Save up to 60% off</p>
                        <button className="btn bg-[#FF3811] border-none text-white ">Get A Quote</button>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-8 text-center">Price $250.00</h2>
            <button className="btn bg-[#FF3811] text-xl text-white w-full">Proceed Checkout</button>
        </div>
    );
};

export default RightSide;