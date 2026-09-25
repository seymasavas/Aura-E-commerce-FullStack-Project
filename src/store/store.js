import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import clientReducer from "../reducers/clientReducer.js";
import productReducer from "../reducers/productReducer.js";
import shoppingCartReducer from "../reducers/shoppingCartReducer.js";
import logger from "redux-logger";

console.log("TEST 1: Reducer geldi mi?", clientReducer);

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log("TEST 2: Store kuruldu mu?", store);

export default store;
