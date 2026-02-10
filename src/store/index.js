import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "./reducers/client.reducer";
import productReducer from "./reducers/product.reducer";
import shoppingCartReducer from "./reducers/shoppingCart.reducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

// Redux DevTools (varsa)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk, logger];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
