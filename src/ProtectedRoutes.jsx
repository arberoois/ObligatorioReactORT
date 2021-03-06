import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const useAuth = () => {
  const { apiKey } = useSelector((state) => state.auth);
  return apiKey;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
