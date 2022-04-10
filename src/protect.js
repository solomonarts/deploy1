import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function useAuth() {
    const user = { loggedIn : false };

    return user && user.loggedIn;
}

const ProtectRoute = () => {
    const isAuth = useAuth();

    return isAuth? <Navigate to={"/home"} /> : <Navigate to={"/sign-up"} />
}

export default ProtectRoute;