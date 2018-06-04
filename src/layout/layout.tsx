import { Layout } from "antd";
import { setupPage } from "csstips";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { fontFace } from "typestyle";

import "@styles/antd.default.less";

setupPage("#root");

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
