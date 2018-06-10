import React from "react";
import { Provider } from "react-redux";
import configureStore from "./app/store/appStore";
import AppWithNavigationState from "./app/containers/AppNavigator.js";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
