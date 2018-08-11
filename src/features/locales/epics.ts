import { combineEpics, Epic } from "redux-observable";
import Types from "Types";

import { localesConstants } from "@src/features/locales";

const setDefaultLocale: Epic<Types.RootAction, Types.RootState, Types.Services> = (
  action$,
  store,
  { localesService, loggerService }
) =>
  action$.ofType(localesConstants.SET_DEFAULT_LOCALES).map(() => localesService.setDefaultLocale());

const changeLocale: Epic<Types.RootAction, Types.RootState, Types.Services> = (
  action$,
  store,
  { localesService }
) =>
  action$.ofType(localesConstants.CHANGE_LOCALES).map(action => {
    // TODO: refactor to switchMap
    switch (action.type) {
      case localesConstants.CHANGE_LOCALES:
        return localesService.changeLocale(action.payload.language);

      default:
        return localesService.changeLocale("en");
    }
  });

export default combineEpics(setDefaultLocale, changeLocale);
