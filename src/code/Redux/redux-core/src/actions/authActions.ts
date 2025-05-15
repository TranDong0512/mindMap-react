/** @format */

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../constants/actionTypes";

export const loginSuccess = (user: {
  id: string;
  name: string;
  password: string;
}) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: Error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logOut = () => ({
  type: LOGOUT,
  payload: "",
});
