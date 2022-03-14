export const CREATE_TODO = "CREATE_TODO";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const createTodo = (todo: string) => ({ type: CREATE_TODO, todo });
export const addTodo = (todo: string) => ({ type: ADD_TODO, todo });
export const deleteTodo = (id: number) => ({ type: DELETE_TODO, id });
export const updateTodo = (id: number, todo: string) => ({ type: UPDATE_TODO, id, todo });
export const clearTodo = () => ({ type: CLEAR_TODO });

