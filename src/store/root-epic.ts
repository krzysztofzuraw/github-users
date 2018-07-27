import { combineEpics } from "redux-observable";

import { localesEpic } from "@src/features/locales";
import { userEpic } from "@src/features/users";

export default combineEpics(userEpic, localesEpic);
