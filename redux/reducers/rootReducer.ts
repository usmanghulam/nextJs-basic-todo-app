import * as act from "../actions";
const INTIAL_STATE = {
  todo: "",
  todos: [],
};

export const reducers = (state = INTIAL_STATE, action: any) => {
  switch (action.type) {
    case act.CREATE_TODO:
      return {
        ...state,
        todo: action.todo,
      };
    case act.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case act.CLEAR_TODO:
      return {
        ...state,
        todo: "",
      };
  }
  return state;
};
