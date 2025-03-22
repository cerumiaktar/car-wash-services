

const Product = ({ product }) => {
    const { img, rating, title, price } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p>{rating}</p>
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl font-medium text-[#FF3811]">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;