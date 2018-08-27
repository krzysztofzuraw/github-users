import { intlReducer } from "react-intl-redux";
import { combineReducers } from "redux";

import { localesReducer } from "@src/features/locales";
import { userReducer } from "@src/features/users";

const rootReducer = combineReducers({
  users: userReducer,
  intl: intlReducer,
  locales: localesReducer,
});

export default rootReducer;
