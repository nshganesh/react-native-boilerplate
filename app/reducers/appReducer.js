import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";

// Combine all the reducers
const appReducer = combineReducers({ dataReducer });

export default appReducer;
