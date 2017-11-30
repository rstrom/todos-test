import React from "react";
import styled from "styled-components";

const Item = styled.div`
  background: hsl(${p => (p.index % 6) * 60}, 90%, 90%);
  margin: 0.5rem 0;
  padding: 1rem;
`;

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.check = this.check.bind(this);
  }

  componentDidMount() {
    //this.props.load(this.props.id);
  }

  componentWillMount() {
    const completed = this.props.item && this.props.item.completed;
    this.setState({ completed });
  }

  check() {
    const completed = !this.state.completed;
    this.setState({ completed });
    this.props.update({ ...this.props.item, completed });
  }

  componentWillReceiveProps(nextProps) {
    const completed = nextProps.item && nextProps.item.completed;
    this.setState({ completed });
  }

  render() {
    const { item, index } = this.props;
    return (
      <Item index={index} className="todo">
        <input
          className="completed"
          type="checkbox"
          checked={this.state.completed}
          onChange={e => {
            this.check();
          }}
        />
        <input
          type="text"
          value={this.state.title || item.title}
          onChange={e => {
            this.setState({ title: e.target.value });
          }}
        />
        {this.state.title &&
          this.state.title !== item.title && <button>save</button>}
        <button>delete</button>
      </Item>
    );
  }
}
