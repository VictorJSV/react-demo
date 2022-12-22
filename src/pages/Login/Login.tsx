import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PrivateRoutes } from "../../models";
import { FormValues } from "./interfaces";
import { useRequestLogin } from "./hooks/useRequestLogin";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const navigate = useNavigate()
  const { doLogin, isPending } = useRequestLogin()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "demo@pp.com",
      password: "titi",
    },
  });

  const onSubmit = async (data: FormValues) => {
    await doLogin(data)
    navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
  };
  return (
    <Flex
      h='100vh'
      align='center'
      justify='center'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
    >
      <Card bg='white'>
        <CardBody>
          <Heading mb={4}>Login</Heading>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormControl mb={4} isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type='email' autoComplete='off' {...register("email")} />
              {errors.email && (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mb={4} isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                autoComplete='off'
                {...register("password")}
              />
              {errors.password && (
                <FormErrorMessage>{errors.password.message}</FormErrorMessage>
              )}
            </FormControl>
            <Button
              type='submit'
              colorScheme='blue'
              disabled={!isValid}
              isLoading={isPending}
            >
              Sign In
            </Button>
          </form>
        </CardBody>
      </Card>
    </Flex>
  );
};
export default Login;
