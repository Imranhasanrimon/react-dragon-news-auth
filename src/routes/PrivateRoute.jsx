import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return children
    }

    return (
        <div>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
};

export default PrivateRoute;