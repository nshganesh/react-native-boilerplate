import { connect } from "react-redux";

import React from "react";
import PropTypes from "prop-types";
import { StackNavigator } from "react-navigation";
import Home from "./HomeContainer";
import ItemDetails from "./ItemDetailsContainer";

export const AppNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: ItemDetails
  }
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  _actionEventSubscribers = new Set();

  _addListener = (eventName, handler) => {
    eventName === "action" && this._actionEventSubscribers.add(handler);
    return {
      remove: () => {
        this._actionEventSubscribers.delete(handler);
      }
    };
  };

  componentDidUpdate(lastProps) {
    const lastState = lastProps.nav;
    this._actionEventSubscribers.forEach(subscriber => {
      subscriber({
        lastState: lastState,
        state: this.props.nav,
        action: this.props.lastAction
      });
    });
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
        <AppNavigator navigation={{
            dispatch,
            state: nav,
            addListener: this._addListener
          }} />
    );
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
const mapStateToProps = state => ({
  nav: state.nav,
  lastAction: state.lastAction
});

//Connect everything
export default connect(mapStateToProps)(AppWithNavigationState);
