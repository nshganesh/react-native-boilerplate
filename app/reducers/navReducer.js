import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../containers/AppNavigator";

const initialNavState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("Home")
);

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case "Details":
      nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: "Details" }),
          state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export const lastAction = (state = null, action) => {
  return action;
};