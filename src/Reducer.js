const is = {
  data: [],
}

const reducer = (state = is, action) => {
  switch (action.type) {
    case "Add_Todo":
        console.log(action);
      state.data.push(action.payload.value)
      action.payload.handleClose()
      action.payload.onclick()
    default:
      return is
  }
}

export default reducer
