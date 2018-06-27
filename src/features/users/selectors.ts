import { createSelector } from "reselect";

import Types from "Types";

const getUserState = (state: Types.RootState) => state.users;

const getUsers = createSelector(getUserState, state =>
  state.allIds.map(id => state.byId[id]).slice(0, 3)
);

export const getFirstNUsers = (state: Types.RootState, n: number) => getUsers(state).slice(0, n);

export const usersFetching = createSelector(getUserState, state => state.isFetching);
