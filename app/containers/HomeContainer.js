import Home from "../components/Home";
import { connect } from "react-redux";
import Data from "../instructions.json";
import * as actions from "../actions/appActionCreator";

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
  data: state.dataReducer.data
});

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = dispatch => ({
  getData() {
    setTimeout(() => {
      var data = Data.instructions;
      dispatch(actions.fetchDataSuccess(data));
    }, 2000);
  }
});

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
