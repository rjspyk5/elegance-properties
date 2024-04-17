import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (!user && loading) {
    return (
      <div className=" flex items-center h-40  justify-center">
        <span className="loading loading-lg loading-spinner text-primary"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};
