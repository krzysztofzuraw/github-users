import { Locale, User } from "@src/models";
import { rootReducer } from "@src/store";
import { Types } from "Types";
import { usersSelectors } from ".";

describe("Users Selectors", () => {
  describe("getFirstNUsers", () => {
    it("should get first N users", () => {
      const userOne = new User("log", "http://", "http://", "name", "http://", 1, "");
      const userTwo = new User("log", "http://", "http://", "name", "http://", 1, "");
      const state = {
        ...rootReducer({}, {} as any),
        users: {
          allIds: [userOne.id, userTwo.id],
          byId: { [userOne.id]: userOne, [userTwo.id]: userTwo },
          isFetching: false,
        },
        locales: { locale: new Locale("pl") },
      };

      expect(usersSelectors.getFirstNUsers(state, 1)).toEqual([userOne]);
    });
  });
});
