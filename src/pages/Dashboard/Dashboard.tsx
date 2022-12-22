import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/states/user";
import { PublicRoutes } from "../../models";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };
  return (
    <Box h='100vh' bgGradient='linear(to-l, #7928CA, #FF0080)'>
      <Container maxW='container.xl' bg='white'>
        <Button onClick={handleClick}>LogOut</Button>
        <Heading>Dashboard</Heading>
      </Container>
    </Box>
  );
};
export default Dashboard;
