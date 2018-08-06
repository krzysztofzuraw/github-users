import { updateIntl } from "react-intl-redux";

import * as enMessages from "@locales/en.json";
import * as plMessages from "@locales/pl.json";

export const changeLocale = (targetLocale: string) => {
  switch (targetLocale) {
    case "en":
      return updateIntl({ locale: targetLocale, messages: { ...enMessages } });
    case "pl":
    default:
      return updateIntl({ locale: targetLocale, messages: { ...plMessages } });
  }
};

export const setDefaultLocale = () => updateIntl({ locale: "pl", messages: { ...plMessages } });
