import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold mb-4">Register</h1>
                            <fieldset className="fieldset space-y-3">
                                <label className="fieldset-label">Name</label>
                                <input type="text" className="input" placeholder="Name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <button className="btn bg-[#FF3811] text-white mt-4">Register</button>
                            </fieldset>
                            <p className="text-center text-[#444444] mt-4">Or Sign up with</p>
                            <div className="flex items-center justify-center gap-4 mt-2 mb-2">
                                <img className="w-10" src="https://i.ibb.co.com/wNRTcrsk/Facebook.png" alt="" />
                                <img className="w-10" src="https://i.ibb.co.com/WpjhmKf7/Group-25.png" alt="" />
                                <img className="w-10" src="https://i.ibb.co.com/7xpxTqV6/Google.png" alt="" />
                            </div>
                            <p className="text-center text-[#444444]">Have an account? <Link to='/login' className="text-[#FF3811] font-medium">Login</Link> </p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co.com/B2xW0THD/Frame-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;