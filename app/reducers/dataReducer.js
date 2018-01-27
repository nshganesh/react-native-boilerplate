import * as types from "../actions/actionTypes/appActionTypes";
import initialState from "./initialState";

export const dataReducer = (state = initialState.dataState, action) => {
  switch (action.type) {
    case types.DATA_AVAILABLE:
      state = Object.assign({}, state, {
        data: action.response,
        loading: false
      });
      return state;
    default:
      return state;
  }
};
