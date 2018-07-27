import { combineEpics, Epic } from "redux-observable";
import { Observable } from "rxjs/Observable";
import Types from "Types";

import { usersActions, usersConstants } from "@src/features/users";

const fetchUsers: Epic<Types.RootAction, Types.RootState, Types.Services> = (
  action$,
  store,
  { githubService, loggerService }
) =>
  action$.ofType(usersConstants.GET_USERS_REQUEST).switchMap(() =>
    Observable.from(githubService.getUsers())
      .map(response => usersActions.getUsersSuccess(response))
      .catch(error =>
        Observable.of(usersActions.getUsersError(error)).do(() => loggerService.log(error))
      )
  );

export default combineEpics(fetchUsers);
