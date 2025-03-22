import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="mb-12 container mx-auto">
            <div className="text-center space-y-2 mb-6">
                <p className="font-medium text-[#FF3811]">Popular Products</p>
                <h2 className="text-2xl font-bold text-[#151515]">Browse Our Products</h2>
                <p className="text-[#737373] w-4/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="text-center mt-8">
                <button className="btn border border-[#FF3811] text-[#FF3811]">More Products</button>
            </div>
        </div>
    );
};

export default Products;