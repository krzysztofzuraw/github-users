import { action } from "typesafe-actions";

import { IUser } from "@src/models";
import { GET_USERS_ERROR, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./constants";

export const getUsersRequest = () => action(GET_USERS_REQUEST);
export const getUsersSuccess = (users: IUser[]) => action(GET_USERS_SUCCESS, users);
export const getUsersError = (message: string) => action(GET_USERS_ERROR, message);
