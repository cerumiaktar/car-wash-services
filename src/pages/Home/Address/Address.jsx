import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdWifiCalling,MdLocationOn } from "react-icons/md";

const Address = () => {
    return (
        <div className="container mx-auto bg-[#151515] mt-12 mb-12 md:px-52 space-y-4 py-24 rounded-2xl flex flex-col md:flex-row justify-between">
            <div className="text-white flex items-center gap-4">
                <p className="text-4xl text-[#FF3811]"><RiCalendarScheduleFill /></p>
                <div>
                    <p className="text-sm text-[#E8E8E8]">We are open monday-friday</p>
                    <h1 className="text-2xl font-medium">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="text-white flex items-center gap-4">
                <p className="text-4xl text-[#FF3811]"><MdWifiCalling /></p>
                <div>
                    <p className="text-sm text-[#E8E8E8]">Have a question?</p>
                    <h1 className="text-2xl font-medium">+2546 251 2658</h1>
                </div>
            </div>
            <div className="text-white flex items-center gap-4">
                <p className="text-4xl text-[#FF3811]"><MdLocationOn /></p>
                <div>
                    <p className="text-sm text-[#E8E8E8]">Need a repair? our address</p>
                    <h1 className="text-2xl font-medium">Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Address;