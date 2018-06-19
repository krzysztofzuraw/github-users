import { combineReducers } from "redux";
import Types from "Types";
import { ActionType } from "typesafe-actions";

import { usersActions, usersConstants } from "../users";

export type UsersState = Readonly<{
  allIds: string[];
}>;

export type UsersActions = ActionType<typeof usersActions>;

const allIds: Types.Reducer<UsersState["allIds"]> = (state = [], action) => {
  switch (action.type) {
    case usersConstants.GET_USERS_SUCCESS:
      return ["1"];
    default:
      return state;
  }
};

const userReducer = combineReducers<UsersState>({ allIds });

export default userReducer;
