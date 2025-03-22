import { IoMdArrowForward } from "react-icons/io";

const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-[#444444]">{title}</h2>
                    <div className="card-actions justify-end">
                        <p className="text-[#FF3811] text-xl font-medium">${price}</p>
                        <button className="btn bg-[#FF3811] text-white text-xl"><IoMdArrowForward /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;