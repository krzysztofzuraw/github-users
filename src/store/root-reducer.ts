import { intlReducer } from "react-intl-redux";
import { combineReducers } from "redux";

import { userReducer as users } from "@src/features/users";

const rootReducer = combineReducers({ users, intl: intlReducer });

export default rootReducer;
