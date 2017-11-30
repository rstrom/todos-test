import React from "react";

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
    const { item } = this.props;
    return (
      <li>
        <input
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
        <pre>{JSON.stringify(item)}</pre>
        {this.state.title &&
          this.state.title !== item.title && <button>save</button>}
        <button>delete</button>
      </li>
    );
  }
}
