import { combineReducers } from "redux";

import { userReducer as users } from "@src/features/users";

const rootReducer = combineReducers({ users });

export default rootReducer;
