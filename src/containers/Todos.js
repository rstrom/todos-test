import { connect } from "react-redux";
import Todos from "../components/Todos";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      dispatch({
        type: "LOAD_TODOS"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
