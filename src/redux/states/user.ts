import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../models";
import { RequestType } from "../../const/request";

const initialState: UserState = {
  status: RequestType.Idle,
  error: null,
  data: {
    id: 0,
    name: "",
  },
};

const getInitialState = (): UserState => {
  const user = localStorage.getItem("user");
  if (user) {
    return {
      ...initialState,
      data: JSON.parse(user),
    };
  }
  return initialState;
};

export const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    fetchUserRequest: (state) => {
      return {
        ...state,
        status: RequestType.Pending,
      };
    },
    fetchUserFailure: (state, action) => {
      return {
        ...state,
        status: RequestType.Rejected,
        error: action.payload,
      };
    },
    fetchUserSuccess: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        status: RequestType.Resolved,
        data: action.payload,
      };
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      localStorage.setItem("user", JSON.stringify(result));
      return result;
    },
    resetUser: () => {
      localStorage.removeItem("user");
      return initialState;
    },
  },
});

export const {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
  updateUser,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
