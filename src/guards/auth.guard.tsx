import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../models";
import { AppStore } from "../redux/store";

export const AuthGuard = () => {
  // Va ir al Store e irá al state USER
  const userState = useSelector((store: AppStore) => store.user);

  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
