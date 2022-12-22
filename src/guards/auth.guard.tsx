import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { AppStore } from "../redux/store";

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.data.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};
// Memo guarda variable
// Callback guarda funcion
export default AuthGuard;
