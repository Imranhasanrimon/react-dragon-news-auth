import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-gray-300">
            <header className="w-11/12 mx-auto py-7">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>

        </div>
    );
};

export default AuthLayout;