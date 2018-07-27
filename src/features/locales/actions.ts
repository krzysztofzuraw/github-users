import { action } from "typesafe-actions";

import { CHANGE_LOCALES, SET_DEFAULT_LOCALES } from "@src/features/locales/constants";
import { ILocale } from "@src/models";

export const changeLocale = (targetLocale: ILocale) => action(CHANGE_LOCALES, targetLocale);
export const setDefaultLocale = () => action(SET_DEFAULT_LOCALES);
