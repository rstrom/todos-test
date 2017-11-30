import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    update: item => {
      dispatch({
        type: "UPDATE_ITEM",
        item
      });
    },
    load: id => {
      dispatch({
        type: "LOAD_TODO",
        id
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
