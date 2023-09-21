const initialState = []


const Todo_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_Todo":
      return ([...state,action.payload,])

    case "Delete_Todo":
      return 

    default:
      return state
  }
}
export default Todo_Reducer
