/* @flow */
import React, { Component } from "react";

export default class Home extends Component {
  render () {
    return (
      <div>Home</div>
    );
  }
}

Home.propTypes = {
  todos: React.PropTypes.object.isRequired,
  todoAdded: React.PropTypes.func.isRequired,
}
