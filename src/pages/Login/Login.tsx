import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Heading, Button } from "@chakra-ui/react";
import { getMorty } from "../../services/auth.service";
import { createUser } from "../../redux/states/user";
import { PrivateRoutes } from "../../models";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goLogin = async () => {
    const result = await getMorty();
    console.log("RES", result);
    dispatch(createUser(result));
    navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
  };
  return (
    <>
      <Heading>Login</Heading>
      <Button colorScheme="blue" onClick={goLogin}>
        Login
      </Button>
    </>
  );
};
export default Login;
