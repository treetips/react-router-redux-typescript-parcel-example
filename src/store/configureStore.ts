import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducers } from "./reducers"

export default function configureStore(initialState: object = {}) {
  // // https://github.com/zalmoxisus/redux-devtools-extension
  if (process.env.NODE_ENV === "production") {
    return createStore(reducers, initialState, applyMiddleware())
  }
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
