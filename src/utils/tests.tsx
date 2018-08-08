import * as React from "react";
import { IntlProvider } from "react-intl";
import createStore from "redux-mock-store";
import { createEpicMiddleware, Epic } from "redux-observable";

import * as enMessages from "@locales/en.json";
import Types from "Types";

export const componentWithIntl = (
  children: JSX.Element,
  props = { locale: "en", messages: { ...enMessages } }
) => <IntlProvider {...props}>{children}</IntlProvider>;

export const createMockStoreWithEpic = (
  epic: Epic<any, any>,
  services: {},
  initialState?: Types.RootState
) => createStore([createEpicMiddleware(epic, { dependencies: services })])(initialState);
