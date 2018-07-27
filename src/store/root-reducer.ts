import { intlReducer } from "react-intl-redux";
import { combineReducers } from "redux";

import { localesReducer as locales } from "@src/features/locales";
import { userReducer as users } from "@src/features/users";

const rootReducer = combineReducers({ users, intl: intlReducer, locales });

export default rootReducer;
