import { createSelector } from "reselect";
import Types from "Types";

const getLocalesState = (state: Types.RootState) => state.locales;

export const getCurrentLang = createSelector(getLocalesState, state => state.locale.language);
