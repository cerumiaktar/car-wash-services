import { MdOutlineStar } from "react-icons/md";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Review = () => {
    return (
        <div className="container mx-auto mb-12">
            <div className="text-center space-y-2 mb-6">
                <p className="font-medium text-[#FF3811]">Testimonial</p>
                <h2 className="text-2xl font-bold text-[#151515]">What Customer Says</h2>
                <p className="text-[#737373] w-4/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 card-lg shadow-xl border border-gray-300">
                    <div className="p-12 space-y-4">
                        <div className="flex items-center gap-4">
                            <img className="w-14" src="https://i.ibb.co.com/sJgrXrhc/p6.png" alt="" />
                            <div>
                                <h2 className="card-title">Rumi Aktar</h2>
                                <p className="text-[#737373] font-medium">Businessman</p>
                            </div>
                        </div>
                        <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="flex ">
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 card-lg shadow-xl border border-gray-300">
                    <div className="p-12 space-y-4">
                        <div className="flex items-center gap-4">
                            <img className="w-14" src="https://i.ibb.co.com/sJgrXrhc/p6.png" alt="" />
                            <div>
                                <h2 className="card-title">Rumi Aktar</h2>
                                <p className="text-[#737373] font-medium">Businessman</p>
                            </div>
                        </div>
                        <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="flex ">
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 card-lg shadow-xl border border-gray-300">
                    <div className="p-12 space-y-4">
                        <div className="flex items-center gap-4">
                            <img className="w-14" src="https://i.ibb.co.com/sJgrXrhc/p6.png" alt="" />
                            <div>
                                <h2 className="card-title">Rumi Aktar</h2>
                                <p className="text-[#737373] font-medium">Businessman</p>
                            </div>
                        </div>
                        <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="flex ">
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                            <p className="text-2xl text-[#FF912C]"><MdOutlineStar /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6">
                <p className="w-3 h-3 bg-[#FF3811] rounded-full"></p>
                <p className="w-3 h-3 bg-gray-300 rounded-full"></p>
                <p className="w-3 h-3 bg-gray-300 rounded-full"></p>
                <p className="w-3 h-3 bg-gray-300 rounded-full"></p>
            </div>
        </div>
    );
};

export default Review;