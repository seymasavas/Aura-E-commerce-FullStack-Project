import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.client.user);
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  const isLogged = token && user && user.email;

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
