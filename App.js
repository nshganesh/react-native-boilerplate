import React from "react";
import { Provider } from "react-redux";
import configureStore from "./app/store/appStore";
import Home from "./app/containers/HomeContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Home />
      </Provider>
    );
  }
}
