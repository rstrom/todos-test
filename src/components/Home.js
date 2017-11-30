import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="auth" onClick={this.props.signIn}>
          Sign In
        </button>
      </div>
    );
  }
}
