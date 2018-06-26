import { createSelector } from "reselect";

import Types from "Types";

const getUserState = (state: Types.RootState) => state.users;

const getUserById = (state: Types.RootState, userId: string) => state.users.byId[userId];

export const getUsers = createSelector(getUserState, state =>
  state.allIds.map(id => state.byId[id]).slice(0, 3)
);

export const usersFetching = createSelector(getUserState, state => state.isFetching);
