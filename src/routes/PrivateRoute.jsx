import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    console.log(user);
    if (user) {
        return children
    } else {
        return <Navigate to={"/auth/login"}></Navigate>
    }

    // return (
    //     <div className="min-h-screen flex justify-center items-center">
    //         <span className="loading loading-spinner loading-lg scale-150"></span>
    //     </div>
    // );
};

export default PrivateRoute;