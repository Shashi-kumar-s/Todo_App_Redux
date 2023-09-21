import { legacy_createStore as createStore } from "redux"
import Todo_Reducer from "../reducers/Todo_Reducer"

const store = createStore(Todo_Reducer)
export default store
