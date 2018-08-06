import * as React from "react";
import { IntlProvider } from "react-intl";

import * as enMessages from "@locales/en.json";

const componentWithIntl = (
  children: JSX.Element,
  props = { locale: "en", messages: { ...enMessages } }
) => <IntlProvider {...props}>{children}</IntlProvider>;

export default componentWithIntl;
