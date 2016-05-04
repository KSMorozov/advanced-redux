import { ADD_COMMENT } from '../constants/ActionTypes';

export default function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          id: state.reduce((max, todo) => Math.max(todo.id, max), -1) + 1,
          text: action.text,
        },
        ...state,
      ];
    default:
      return state;
  }
}
