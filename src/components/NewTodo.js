import React from "react";

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.state.completed}
          onChange={e => {
            this.setState({ completed: !this.state.completed });
          }}
        />
        <input
          type="text"
          value={this.state.title}
          onChange={e => {
            this.setState({ title: e.target.value });
          }}
        />
        <button onClick={() => this.props.create(this.state)}>create</button>
      </li>
    );
  }
}
