import { StateType } from "typesafe-actions";

import rootReducer from "@src/store/root-reducer";
import { UsersState, UsersActions } from "@src/features/users";
import { LocalesState, LocalesActions } from "@src/features/locales";

declare module "Types" {
  export type RootState = { users: UsersState; locales: LocalesState };
  export type RootAction = UsersActions | LocalesActions;
  export type Reducer<S> = (state: S, action: RootAction) => S;
}
