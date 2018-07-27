import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { localesActions } from "@src/features/locales";
import services from "@src/services";
import rootEpic from "@src/store/root-epic";
import rootReducer from "@src/store/root-reducer";
import { composeEnhancers } from "@src/store/utils";

export const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: services });

const configureStore = (initialState?: object) => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState!, enhancer);
};

const store = configureStore();

store.dispatch(localesActions.setDefaultLocale());

export default store;
