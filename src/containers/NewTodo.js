import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    create: item => {
      console.log(item);
      dispatch({
        type: "CREATE_ITEM",
        item
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
