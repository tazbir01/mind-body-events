import { useContext } from "react";
import { authContext } from "../Provider/AuthProvder";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(authContext)
    const location = useLocation()
    console.log(location)

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;