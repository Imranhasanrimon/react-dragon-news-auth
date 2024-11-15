import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none shadow-2xl">
                <form className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Login Your Account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <h3 >Don't have an account? <Link className="text-red-500 font-semibold hover:underline" to="/auth/register">Register</Link ></h3>
                </form>
            </div>
        </div>
    );
};

export default Login;