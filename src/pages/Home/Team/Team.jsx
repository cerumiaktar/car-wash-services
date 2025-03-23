import { IoMdArrowBack,IoMdArrowForward } from "react-icons/io";

const Team = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="text-center space-y-2 mb-6">
                <p className="font-medium text-[#FF3811]">Team</p>
                <h2 className="text-2xl font-bold text-[#151515]">Meet Our Team</h2>
                <p className="text-[#737373] w-4/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <p className="bg-gray-100 text-[#444444] rounded-full p-4"><IoMdArrowBack /></p>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/kVsKJcMf/Rectangle-7-2.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="font-medium text-[#737373]">Engine Expert</p>
                        <div className="card-actions">
                            <img className="w-9" src="https://i.ibb.co.com/gZ4wGNRW/Group-4889.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/n8mccjR8/Group-4891.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/jZ9CmdRt/Group-4892.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/cSF7YxFg/Group-4893.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/pB8njdtS/Rectangle-7-3.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="font-medium text-[#737373]">Engine Expert</p>
                        <div className="card-actions">
                            <img className="w-9" src="https://i.ibb.co.com/gZ4wGNRW/Group-4889.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/n8mccjR8/Group-4891.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/jZ9CmdRt/Group-4892.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/cSF7YxFg/Group-4893.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/kVsKJcMf/Rectangle-7-2.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="font-medium text-[#737373]">Engine Expert</p>
                        <div className="card-actions">
                            <img className="w-9" src="https://i.ibb.co.com/gZ4wGNRW/Group-4889.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/n8mccjR8/Group-4891.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/jZ9CmdRt/Group-4892.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/cSF7YxFg/Group-4893.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/BKcKh00M/Rectangle-7-4.png"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="font-medium text-[#737373]">Engine Expert</p>
                        <div className="card-actions">
                            <img className="w-9" src="https://i.ibb.co.com/gZ4wGNRW/Group-4889.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/n8mccjR8/Group-4891.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/jZ9CmdRt/Group-4892.png" alt="" />
                            <img className="w-9" src="https://i.ibb.co.com/cSF7YxFg/Group-4893.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="bg-[#FF3811] text-white rounded-full p-4"><IoMdArrowForward /></p>
                </div>
            </div>
        </div>
    );
};

export default Team;