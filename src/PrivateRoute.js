import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { authToken } from './auth/Auth'

const useAuth = () => {
  const user = authToken();
  return user;
};

// handle the private routes
function PrivateRoute() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Signup" />;
}

export default PrivateRoute;