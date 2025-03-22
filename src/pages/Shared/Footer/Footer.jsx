

const Footer = () => {
    return (
        <div className="bg-[#151515]">
            <footer className="footer sm:footer-horizontal container mx-auto text-white p-10">
                <aside>
                    <img className="w-24" src="https://i.ibb.co.com/tdTVt2P/Group-2-1.png" alt="" />
                    <p className="text-[#E8E8E8]">
                        Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
                    </p>
                    <nav className="flex items-center gap-2">
                        <img src="https://i.ibb.co.com/3gFXBqn/Icon-2.png" alt="" />
                        <img src="https://i.ibb.co.com/1Hn1hLW/Icon-2x.png" alt="" />
                        <img src="https://i.ibb.co.com/8LswYMtT/Icon-1.png" alt="" />
                        <img src="https://i.ibb.co.com/1Gw8NNss/Icon.png" alt="" />
                    </nav>
                </aside>
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;