import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const emptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState: emptyUserState,
  reducers: {
    createUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => emptyUserState
  }
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
