import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import appReducer from "../reducers/appReducer"; //Import the reducer

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);

    return returnValue;
  };
};

export default function configureStore() {
  const store = createStore(appReducer, applyMiddleware(thunk));
  store.dispatch = addLoggingToDispatch(store);
  return store;
}
