import { thunk } from "redux-thunk";
import { userReducer } from "./redux/reducers/userReducer";

import { createStore, combineReducers, applyMiddleware } from "redux"

const reducer = combineReducers({
  user: userReducer
})

export const store = createStore(reducer, applyMiddleware(thunk))