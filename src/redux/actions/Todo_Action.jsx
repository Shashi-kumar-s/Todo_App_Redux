
export const Addtodo = (value) => ({
  type: "Add_Todo",
  payload: value,
})

export const  Deletetodo = (id) => ({
  type: "Delete_Todo",
  payload:id,
})

