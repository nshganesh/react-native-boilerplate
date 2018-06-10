import * as types from "../actions/actionTypes/appActionTypes";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS:
      return {
        ...state,
        ...action.response.entities.addresses
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};


const addresses = combineReducers({ byId, allIds });
export default addresses;