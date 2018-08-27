import { combineReducers } from "redux";
import Types from "Types";
import { ActionType } from "typesafe-actions";

import { usersActions, usersConstants } from "@src/features/users";
import { IUser } from "@src/models";

export type UsersState = Readonly<{
  allIds: string[];
  byId: { [id: string]: IUser };
  isFetching: boolean;
}>;

export type UsersActions = ActionType<typeof usersActions>;

const allIds: Types.Reducer<UsersState["allIds"]> = (state = [], action) => {
  switch (action.type) {
    case usersConstants.GET_USERS_SUCCESS:
      return action.payload.map(user => user.id);
    default:
      return state;
  }
};

const byId: Types.Reducer<UsersState["byId"]> = (state = {}, action) => {
  switch (action.type) {
    case usersConstants.GET_USERS_SUCCESS:
      return action.payload.reduce<UsersState["byId"]>(
        (result, item) => ((result[item.id] = item), result),
        {}
      );
    default:
      return state;
  }
};

const isFetching: Types.Reducer<UsersState["isFetching"]> = (state = false, action) => {
  switch (action.type) {
    case usersConstants.GET_USERS_REQUEST:
      return true;
    case usersConstants.GET_USERS_SUCCESS:
    case usersConstants.GET_USERS_ERROR:
      return false;
    default:
      return state;
  }
};

const userReducer = combineReducers<UsersState>({ allIds, byId, isFetching });

export default userReducer;
