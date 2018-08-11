import { updateIntl } from "react-intl-redux";
import { combineEpics } from "redux-observable";

import { Locale } from "@src/models";
import { createMockStoreWithEpic } from "@src/utils";
import { localesActions, localesEpic } from ".";

describe("Feature - locales - epics", () => {
  describe("changeLocale", () => {
    it("should change locale", () => {
      const locale = Locale.create({ language: "en" });
      const changeLocale = jest.fn(() => updateIntl({ locale: locale.language, messages: "" }));
      const epicStore = createMockStoreWithEpic(combineEpics(localesEpic), {
        localesService: { changeLocale },
      });

      const triggerAction = localesActions.changeLocale(locale);
      epicStore.dispatch(triggerAction);

      expect(epicStore.getActions()).toEqual([
        triggerAction,
        { payload: { formats: undefined, locale: "en", messages: "" }, type: "@@intl/UPDATE" },
      ]);
    });
  });
});
