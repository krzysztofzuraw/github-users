import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import services from "@src/services";
import rootEpic from "./root-epic";
import rootReducer from "./root-reducer";
import { composeEnhancers } from "./utils";

import plMessages from "@locales/pl.json";

export const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies: services });

const configureStore = (initialState?: object) => {
  const middlewares = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(rootReducer, initialState!, enhancer);
};

const initialStateWithIntl = {
  intl: {
    defaultLocale: "en",
    locale: "pl",
    messages: { ...plMessages },
  },
};

const store = configureStore(initialStateWithIntl);

export default store;
