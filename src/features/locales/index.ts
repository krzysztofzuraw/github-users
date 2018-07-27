import * as localesActions from "@src/features/locales/actions";
import * as localesConstants from "@src/features/locales/constants";
import localesEpic from "@src/features/locales/epics";
import localesReducer, { LocalesActions, LocalesState } from "@src/features/locales/reducers";
import * as localesSelectors from "@src/features/locales/selectors";

export {
  localesActions,
  localesConstants,
  localesReducer,
  LocalesActions,
  LocalesState,
  localesEpic,
  localesSelectors,
};
