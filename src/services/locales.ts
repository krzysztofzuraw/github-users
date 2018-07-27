import { updateIntl } from "react-intl-redux";

import enMessages from "@locales/en.json";
import plMessages from "@locales/pl.json";

export const changeLocale = (targetLocale: string) => {
  switch (targetLocale) {
    case "pl":
      return updateIntl({ locale: targetLocale, messages: { ...plMessages } });
    case "en":
      return updateIntl({ locale: targetLocale, messages: { ...enMessages } });
    default:
      break;
  }
};

export const setDefaultLocale = () => updateIntl({ locale: "pl", messages: { ...plMessages } });
