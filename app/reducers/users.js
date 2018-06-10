import * as types from "../actions/actionTypes/appActionTypes";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        ...action.response.entities.users
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return [...state, ...action.response.result];
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_USERS_START:
    case types.FETCH_USERS_FAILURE:
    case types.FETCH_USERS_SUCCESS:
      return action.loading;
    default:
      return state;
  }
};

const users = combineReducers({ byId, allIds, loading });
export default users;