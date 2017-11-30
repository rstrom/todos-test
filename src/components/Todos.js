import React from "react";
import TodoItem from "../containers/TodoItem";

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
        {this.props.todos.map((item, i) => {
          return <TodoItem item={item} key={i} />;
        })}
      </ul>
    );
  }
}
