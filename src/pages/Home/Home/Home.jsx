import About from "../About/About";
import Address from "../Address/Address";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Products from "../Products/Products";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Address></Address>
            <Products></Products>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;