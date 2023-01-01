import { render, screen, act, fireEvent } from "@test/test-utils";
import Login from "./Login";
import store from "@src/redux/store";
import * as services from "./services/auth.service"

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => jest.fn(),
}));

describe("Login Component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should have hello world message", async () => {
    const loginResolve = { name: "Bichin" }
    const mockDoLogin = jest.spyOn(services, 'login').mockResolvedValue(loginResolve)
    render(<Login />);
    const email = screen.getByRole("textbox", { name: /Email/i });
    const password = screen.getByLabelText(/password/i);

    fireEvent.input(email, { target: { value: "test@demo.com" } });
    fireEvent.input(password, { target: { value: "test" } });
    fireEvent.submit(screen.getByRole("button"));

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(email).toHaveValue("test@demo.com");
    await act(() => mockDoLogin);
    expect(mockDoLogin).toHaveBeenCalled()
    expect(store.getState().user.data).toMatchObject(loginResolve)
  });
});
