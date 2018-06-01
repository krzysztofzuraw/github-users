import { Layout } from "antd";
import "antd/dist/antd.css";
import { setupPage } from "csstips";
import * as React from "react";
import { fontFace } from "typestyle";

import { FormattedMessage } from "react-intl";

setupPage("#root");

fontFace({
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontStyle: "normal",
  fontWeight: 400,
});

export const MainLayout: React.SFC = () => {
  return (
    <Layout>
      <Layout.Header>
        <FormattedMessage id="Header.title" />
      </Layout.Header>
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  );
};
