import { configureStore } from "@reduxjs/toolkit";
import { UserState } from "../models";
import { userSlice } from "./states/user";

export interface AppStore {
  user: UserState;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
});
