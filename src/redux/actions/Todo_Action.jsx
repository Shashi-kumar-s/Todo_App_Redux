import { ADD_TODO, ALL_TODO, CHECKBOX_TODO, COMPLETE_TODO, DELETEALL_TODO, DELETESELECTED_TODO, DELETE_TODO, INCOMPLETE_TODO } from "./Actions"

export const AddTodo = (value) => ({
  type: ADD_TODO,
  payload: value,
})

export const  DeleteTodo = (id) => ({
  type:DELETE_TODO,
  payload:id,
})
export const  AllTodo = () => ({
  type:ALL_TODO,
  // payload:"",
})
export const  CompleteTodo = () => ({
  type:COMPLETE_TODO,
  // payload:"",
})
export const  InCompleteTodo = () => ({
  type:INCOMPLETE_TODO,
  // payload:"",
})
export const  DeleteSelectedTodo = () => ({
  type:DELETESELECTED_TODO,
  // payload:"",
})
export const  DeleteAllTodo = () => ({
  type:DELETEALL_TODO,
  // payload:"",
})
export const  CheckboxTodo = (id,checked) => ({
  type:CHECKBOX_TODO,
  payload:{id,checked},
})

