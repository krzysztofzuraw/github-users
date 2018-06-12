import { Layout } from "antd";
import { setupPage } from "csstips";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { style } from "typestyle";

import "@styles/antd.default.less";

const styles = {
  content: style({ padding: "0 50px", backgroundColor: "#fff" }),
  layout: style({
    alignItems: "center",
    backgroundColor: "#dfdbe5",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
  }),
};

export const MainLayout: React.SFC = () => {
  return (
    <Layout className={styles.layout}>
      <div className={styles.content}>Content</div>
    </Layout>
  );
};
