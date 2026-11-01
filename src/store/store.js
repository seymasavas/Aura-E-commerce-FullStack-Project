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

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
