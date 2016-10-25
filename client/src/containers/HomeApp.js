/* @flow */
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Socket } from 'phoenix-js';

import { todoAdded } from '../actions/todos';
import TodoList from "components/TodoList";
import AddTodo from "components/AddTodo";

export class HomeApp extends Component {
  /**
   * Called by ReactRouter before loading the container. Called prior to the
   * React life cycle so doesn't have access to component's props or state.
   *
   * @param {Object} store redux store object
   * @param {Object} renderProps render properties returned from ReactRouter
   * @param {Object} query location data
   * @param {Object} serverProps server specific properties
   * @param {Boolean} serverProps.isServer method running on server or not
   * @param {Request} [serverProps.request] express request if isServer
   *
   * @return {(Promise|undefined)} If this method returns a promise, the router
   * will wait for the promise to resolve before the container is loaded.
   */
  static gsBeforeRoute (/* {dispatch}, renderProps, query, serverProps */) {}

  constructor () {
    super();

    this.todoAdded = this.todoAdded.bind(this);
  }

  componentDidMount () {
    channel = this.joinTodosChannel();
    channel.on('new:todo', msg => {
      console.log('new:todo', msg);
      this.props.todoAdded(msg.text);
    });
  }

  joinTodosChannel() {
    let socket = new Socket('ws://localhost:4000/socket');
    socket.connect();

    let channel = socket.channel('todos');

    channel.join()
      .receive('ok', messages => {
        console.log('Incoming messages: ', messages);
        messages.todos.map(todo => this.props.todoAdded(todo.text));
      })
      .receive('error', reason => console.log('Error joining todos:', reason))
      .after(10000, () => console.log('No response from server yet.'));

    return channel;
  }

  todoAdded (text) {
    channel.push('new:todo', {text: text})
      .receive('ok', response => {
        console.log('todo added: ', response);
        {/* Don't update state here since it will be handled in .on('new:todo') */}
      })
      .receive('error', error => {
        console.error(error);
      });
  }

  render () {
    return (
      <div>
        <Helmet title="Home"/>
        <AddTodo todoAdded={this.todoAdded} />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

HomeApp.contextTypes = {
  store: React.PropTypes.object.isRequired
};

let channel = {};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(
  (state) => (mapStateToProps),
  (dispatch) => bindActionCreators({ todoAdded }, dispatch)
)(HomeApp);
