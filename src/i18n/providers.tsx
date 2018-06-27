import * as React from "react";
import { addLocaleData } from "react-intl";
import { IntlProvider } from "react-intl-redux";
import * as en from "react-intl/locale-data/en";
import * as pl from "react-intl/locale-data/pl";

addLocaleData([...en, ...pl]);

export const AppLocaleProvider: React.SFC = props => {
  return <IntlProvider>{props.children}</IntlProvider>;
};
