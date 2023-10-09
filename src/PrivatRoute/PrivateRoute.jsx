import { useContext } from "react";
import { authContext } from "../Provider/AuthProvder";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <>
            <div className="flex justify-center mt-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;