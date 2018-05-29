import { Layout, LocaleProvider } from "antd";
import plPL from "antd/lib/locale-provider/pl_PL";
import * as React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import { FormattedMessage } from "react-intl";
import * as en from "react-intl/locale-data/en";
import * as pl from "react-intl/locale-data/pl";

import plMessages from "@locales/pl.json";

addLocaleData([...en, ...pl]);

export const Main = () => {
  return (
    <LocaleProvider locale={plPL}>
      <IntlProvider locale="pl" messages={plMessages}>
        <Layout>
          <Layout.Header>
            <FormattedMessage id="Header.title" />
          </Layout.Header>
        </Layout>
      </IntlProvider>
    </LocaleProvider>
  );
};
