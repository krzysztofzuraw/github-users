import { combineEpics } from "redux-observable";

import { userEpic } from "@src/features/users";

export default combineEpics(userEpic);
