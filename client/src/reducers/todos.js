/* @flow */
import * as actions from '../actions/todos'

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.TODO_ADDED:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state;
  }
};
