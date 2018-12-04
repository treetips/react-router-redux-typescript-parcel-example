import { routerReducer } from "react-router-redux"
import { combineReducers } from "redux"
import counter from "./counter"

export const reducers = combineReducers({
  counter,
  routing: routerReducer,
})
