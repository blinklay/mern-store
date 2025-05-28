import { userReducer } from "./redux/reducers/userReducer";

import { createStore, combineReducers } from "redux"

const reducer = combineReducers({
  user: userReducer
})

export const store = createStore(reducer)