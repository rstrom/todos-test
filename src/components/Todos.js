import React from "react";
import TodoItem from "./TodoItem";

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((id, i) => {
          return <TodoItem id={id} key={i} />;
        })}
      </ul>
    );
  }
}
