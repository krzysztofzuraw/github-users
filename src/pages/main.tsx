import * as React from "react";

import { AppLocaleProvider } from "@src/i18n";
import { MainLayout } from "@src/layout";

export const Main = () => {
  return (
    <AppLocaleProvider>
      <MainLayout />
    </AppLocaleProvider>
  );
};
