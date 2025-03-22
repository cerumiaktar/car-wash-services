import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mx-auto mt-26 mb-12">
            <div className="text-center space-y-2">
                <p className="font-medium text-[#FF3811]">Service</p>
                <h2 className="text-2xl font-bold text-[#151515]">Our Service Area</h2>
                <p className="text-[#737373] w-4/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
            <div className="text-center mt-8">
                <button className="btn border border-[#FF3811] text-[#FF3811]">More Services</button>
            </div>
        </div>
    );
};

export default Services;