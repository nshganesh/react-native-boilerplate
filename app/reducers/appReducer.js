import { combineReducers } from "redux";
import { nav, lastAction } from "./navReducer.js";
import companies from "./companies";
import addresses from "./addresses";
import users from "./users";

// Combine all the reducers
const appReducer = combineReducers({
  users,
  addresses,
  companies,
  nav,
  lastAction
});

export default appReducer;