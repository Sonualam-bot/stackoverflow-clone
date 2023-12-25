import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function RequiresAuth({ children }) {
  let location = useLocation();
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/Auth" state={{ from: location }} />;
}

export default RequiresAuth;
