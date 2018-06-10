import Home from "../components/Home";
import { connect } from "react-redux";
import { denormalize, normalize } from "normalizr";
import {userList} from "../api/schema";
import * as usersApi from "../api/usersApi";
import * as actions from "../actions/appActionCreator";

const mapStateToProps = state => ({
  loading: state.users.loading,
  users: denormalize(state.users.allIds, userList, {
    users: state.users.byId,
    addresses: state.addresses.byId,
    companies: state.companies.byId,
  })
});

const mapDispatchToProps = dispatch => ({
  fetchUsers(page, limit) {
    dispatch(actions.fetchUsersStart());
    usersApi.fetchUsers(page, limit)
      .then(response => dispatch(actions.fetchUsersSuccess(normalize(response, userList))))
      .catch(error => dispatch(actions.fetchUsersFailure(error)));
  }
});

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
