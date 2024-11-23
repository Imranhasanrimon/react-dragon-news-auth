import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Register = () => {
    const { setUser } = useContext(AuthContext);
    const createNewUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        // const name = form.get("Name");
        // const photo = form.get("Photo-Url");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                e.target.reset()
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register Your Account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="Name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <input name="Photo-Url" type="text" placeholder="Photo-Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <h3 className="text-center">Already have an account? <Link className="text-red-500 font-semibold hover:underline" to="/auth/login">Login</Link ></h3>
                </form>
            </div>
        </div>
    );
};

export default Register;

//I should practice this again