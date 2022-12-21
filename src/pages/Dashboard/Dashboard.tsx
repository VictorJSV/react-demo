import { Navigate, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { PrivateRoutes } from "../../models";
import { Home } from "../Home";

const Dashboard = () => {
  return (
    <>
      {/* <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} /> */}
      <Heading>Dashboard</Heading>
    </>
  );
};
export default Dashboard;
