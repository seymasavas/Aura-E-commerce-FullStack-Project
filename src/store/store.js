import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import userReducer from "../reducers/userReducer.js";

console.log("TEST 1: Reducer geldi mi?", userReducer);

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("TEST 2: Store kuruldu mu?", store);

export default store;
