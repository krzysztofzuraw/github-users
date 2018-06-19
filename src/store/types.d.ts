import { StateType } from "typesafe-actions";

import rootReducer from "./root-reducer";
import { UsersState, UsersActions } from "@src/features/users";

declare module "Types" {
  export type RootState = { users: UsersState };
  export type RootAction = UsersActions;
  export type Reducer<S> = (state: S, action: RootAction) => S;
}
