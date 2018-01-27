import * as types from "./actionTypes/appActionTypes";

export const fetchDataSuccess = response => ({
  type: types.DATA_AVAILABLE,
  response
});
