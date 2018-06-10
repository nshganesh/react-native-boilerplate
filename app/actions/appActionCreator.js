import * as types from "./actionTypes/appActionTypes";

export const fetchUsersStart = () => ({
  type: types.FETCH_USERS_START,
  loading: true,
});

export const fetchUsersSuccess = response => ({
  type: types.FETCH_USERS_SUCCESS,
  response,
  loading: false,
});

export const fetchUsersFailure = error => ({
  type: types.FETCH_USERS_FAILURE,
  error,
  loading: false,
});