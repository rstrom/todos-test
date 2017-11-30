import React from "react";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="email" />
        <input type="password" />
        <input type="submit" />
      </form>
    );
  }
}
