/* @flow */
import React, { Component } from "react";

export default class Todo extends Component {
  render () {
    return (
      <li>
        {this.props.todo.text}
      </li>
    );
  }
}

Todo.propTypes = {
  todo: React.PropTypes.object.isRequired,
}
