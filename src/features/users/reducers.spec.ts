import { userReducer, usersActions } from "@src/features/users";
import { User } from "@src/models";

const initialState = { allIds: [], byId: {}, isFetching: false };

describe("Users reducer", () => {
  it("should match snapshot for inital state", () => {
    expect(initialState).toMatchSnapshot();
  });

  describe("allIds, byId", () => {
    const user = new User("log", "http://", "http://", "name", "http://", 1, "");
    const action = usersActions.getUsersSuccess([user]);

    it("should return all user ids", () => {
      const state = userReducer(initialState, action);
      expect(state.allIds).toEqual([user.id]);
    });

    it("should return user by their id", () => {
      const state = userReducer(initialState, action);
      expect(state.byId).toEqual({ [user.id]: user });
    });
  });

  describe("isFetching", () => {
    it("should return true when request is in progress", () => {
      const state = userReducer(initialState, usersActions.getUsersRequest());
      expect(state.isFetching).toBeTruthy();
    });

    it("should return false when request ends with success", () => {
      const user = new User("log", "http://", "http://", "name", "http://", 1, "");
      const state = userReducer(initialState, usersActions.getUsersSuccess([user]));
      expect(state.isFetching).toBeFalsy();
    });

    it("should return false when request ends with error", () => {
      const state = userReducer(initialState, usersActions.getUsersError("API Error"));
      expect(state.isFetching).toBeFalsy();
    });
  });
});
