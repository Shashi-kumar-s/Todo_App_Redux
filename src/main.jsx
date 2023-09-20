import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./assets/global.css"
import { legacy_createStore as createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./Reducer.js"

const store=createStore(reducer)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <App />
  </Provider>
)
