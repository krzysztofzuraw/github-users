import { agentInstance } from "@src/api";

import { IUser, IUserDTO, User } from "@src/models";

export const getUsers = async (): Promise<IUser[]> =>
  agentInstance
    .get<IUserDTO[]>("/users")
    .then(res => res.data)
    .then(data => data.map(user => User.create(user)));
