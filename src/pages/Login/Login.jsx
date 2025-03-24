import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container mx-auto">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login</h1>
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-[#FF3811] text-white mt-4">Login</button>
                            </fieldset>
                            <p className="text-center text-[#444444] mt-4">Or Sign In with</p>
                            <div className="flex items-center justify-center gap-4 mt-2 mb-2">
                                <img className="w-10" src="https://i.ibb.co.com/wNRTcrsk/Facebook.png" alt="" />
                                <img className="w-10" src="https://i.ibb.co.com/WpjhmKf7/Group-25.png" alt="" />
                                <img className="w-10" src="https://i.ibb.co.com/7xpxTqV6/Google.png" alt="" />
                            </div>
                            <p className="text-center text-[#444444]">Have an account? <Link className="text-[#FF3811] font-medium">Register</Link> </p>
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

export default Login;