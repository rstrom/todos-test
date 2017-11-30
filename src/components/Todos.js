import React from "react";
import TodoItem from "../containers/TodoItem";
import NewTodo from "../containers/NewTodo";

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
        <NewTodo />
      </ul>
    );
  }
}
