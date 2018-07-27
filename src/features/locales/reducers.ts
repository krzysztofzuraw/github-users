import { combineReducers } from "redux";
import Types from "Types";
import { ActionType } from "typesafe-actions";

import { localesActions, localesConstants } from "@src/features/locales";
import { ILocale, Locale } from "@src/models";

export type LocalesState = Readonly<{
  locale: ILocale;
}>;

export type LocalesActions = ActionType<typeof localesActions>;

const initialLocale = new Locale("pl");

const locale: Types.Reducer<LocalesState["locale"]> = (state = initialLocale, action) => {
  switch (action.type) {
    case localesConstants.CHANGE_LOCALES:
      return action.payload;
    default:
      return state;
  }
};

const localesReducer = combineReducers<LocalesState>({ locale });

export default localesReducer;
