import {
  ADD_TODO,
  ALL_TODO,
  CHECKBOX_TODO,
  COMPLETE_TODO,
  DELETEALL_TODO,
  DELETESELECTED_TODO,
  DELETE_TODO,
  INCOMPLETE_TODO,
} from "../actions/Actions"

const initialState = {
  AllData: [],
  data: [],
}

const Todo_Reducer = (state = initialState.AllData, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    case DELETE_TODO:
      const filterData = state.filter((ele) => ele.id !== action.payload)
      return filterData

    case ALL_TODO:
      return [...state]

    case COMPLETE_TODO:
      const completeData = state.filter((ele) => ele.checked)
      return completeData

    case INCOMPLETE_TODO:
      const inCompleteData = state.filter((ele) => !ele.checked)
      console.log(inCompleteData)
      return inCompleteData

    case DELETESELECTED_TODO:
      const deleteSelected = state.filter((ele) => !ele.checked)
      return deleteSelected

    case DELETEALL_TODO:

    case CHECKBOX_TODO:
      const checkData = state.filter((ele) =>
        ele.id === action.payload.id
          ? (ele = {
              id: ele.id,
              inputData: ele.inputData,
              checked: ele.checked !== action.payload.checked,
            })
          : ele
      )
      return checkData

    default:
      return state
  }
}
export default Todo_Reducer
