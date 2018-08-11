import { combineEpics } from "redux-observable";

import { User } from "@src/models";
import { createMockStoreWithEpic } from "@src/utils";
import { userEpic, usersActions } from ".";

describe("Feature - users - epics", () => {
  describe("fetchUsers", () => {
    it("should fetch users from github", () => {
      const user = User.create({
        avatar_url: "https://",
        bio: "bio",
        blog: "blog",
        html_url: "https://",
        id: "1",
        public_repos: 1,
        name: "name",
        login: "user",
      });
      const getUsers = jest.fn().mockReturnValue([[user]]);
      const epicStore = createMockStoreWithEpic(combineEpics(userEpic), {
        githubService: {
          getUsers,
        },
      });

      const triggerAction = usersActions.getUsersRequest();
      epicStore.dispatch(triggerAction);

      expect(epicStore.getActions()).toEqual([triggerAction, usersActions.getUsersSuccess([user])]);
      expect(getUsers).toHaveBeenCalled();
    });
  });
});
