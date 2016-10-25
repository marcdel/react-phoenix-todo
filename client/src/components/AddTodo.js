/* @flow */
import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.setState({value: ''});
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  onKeyPress(e) {
    if (e.charCode === 13) {
      this.onClick();
    }
  }

  onClick() {
    this.setState({value: ''});
    this.props.todoAdded(this.state.value);
  }

  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={(e) => this.onChange(e)} onKeyPress={e => this.onKeyPress(e)} />
        <button onClick={() => this.onClick()}>Add</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  todoAdded: React.PropTypes.func.isRequired,
}
