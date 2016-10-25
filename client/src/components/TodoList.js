/* @flow */
import React, { Component } from "react";

import Todo from "components/Todo";

export default class TodoList extends Component {
  render () {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <Todo key={index} todo={todo} />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
}
