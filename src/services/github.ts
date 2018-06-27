import { agentInstance } from "@src/api";

import { IUser, IUserDTO, User } from "@src/models";

export const getUsers = async (randomOffset = Math.floor(Math.random() * 500)): Promise<IUser[]> =>
  agentInstance
    .get<IUserDTO[]>(`/users?since=${randomOffset}`)
    .then(res => res.data)
    .then(data => data.map(user => User.create(user)));
