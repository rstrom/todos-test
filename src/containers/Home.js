import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: () => {
      dispatch({
        type: "SIGN_IN"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
