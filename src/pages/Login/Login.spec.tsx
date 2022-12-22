import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { ChakraProvider } from "@chakra-ui/react";

describe("Login Component", function () {
  it("should have hello world message", async () => {
    render(
      <ChakraProvider>
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      </ChakraProvider>
    );
    screen.debug(screen.getByText('Login'))
  });
});
