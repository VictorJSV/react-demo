import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { AuthGuard } from "./guards";
import { PrivateRoutes, PublicRoutes } from "./models";
import store from "./redux/store";
import { Provider } from "react-redux";

const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Home = lazy(() => import("./pages/Home/Home"));

export const App = () => {
  // Suspense se hace es mostrar el fallback hasta que cargue sus componentes
  return (
    <Suspense fallback={<>Cargando ...</>}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* Cuando no escriba nada el usuario, tendrá que ir a Login */}
            <Route
              path="/"
              element={<Navigate to={PrivateRoutes.DASHBOARD} />}
            ></Route>
            {/* Cuando la ruta no existe */}
            <Route path="*" element={<>NOT FOUND</>} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={PrivateRoutes.HOME} element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
};
