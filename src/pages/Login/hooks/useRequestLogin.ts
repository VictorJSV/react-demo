import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RequestType } from "../../../models";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../../redux/states/user";
import { AppStore } from "../../../redux/store";
import { FormValues } from "../interfaces";
import { login } from "../services/auth.service";

export const useRequestLogin = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((store: AppStore) => store.user);
  const doLogin = async (data: FormValues) => {
    try {
      dispatch(fetchUserRequest());
      const result = await login(data);
      dispatch(fetchUserSuccess(result));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };

  return {
    doLogin,
    isPending: status === RequestType.Pending,
  };
};
