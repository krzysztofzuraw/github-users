import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import services from "@src/services";
import rootEpic from "./root-epic";
import rootReducer from "./root-reducer";
import { composeEnhancers } from "./utils";

export const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: services });

const configureStore = (initialState?: object) => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState!, enhancer);
};

const store = configureStore();

export default store;
