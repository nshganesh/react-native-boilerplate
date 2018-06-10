import ItemDetails from "../components/ItemDetails";
import { connect } from "react-redux";
import * as actions from "../actions/appActionCreator";
import { normalize } from "normalizr";
import * as schemas from "../api/schema";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({

});

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
