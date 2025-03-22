

const About = () => {
    return (
        <div className="flex container mx-auto gap-8 mb-12">
            <div className="w-6/12 relative">
                <img className=" h-[473px] rounded-2xl" src="https://i.ibb.co.com/rRWwCnpr/person.jpg" alt="" />
                <div className="absolute right-0 -bottom-12 "> 
                    <img className="w-[350px] rounded-2xl border-8 border-white" src="https://i.ibb.co.com/fVDgf4SP/parts.jpg" alt="" />
                </div>
            </div>
            <div className="w-6/12 space-y-4">
                <p className="font-medium text-[#FF3811]">About Us</p>
                <h2 className="text-2xl font-bold w-3/6 text-[#151515]">We are qualified & of experience in this field</h2>
                <p className="w-4/6 leading-7 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />
                the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
                <button className="btn bg-[#FF3811] text-white">Get More Info</button>
            </div>
        </div>
    );
};

export default About;