import { Layout } from "antd";
import * as React from "react";
import { style } from "typestyle/lib";

import { MainCard } from "@src/components";
import { LocaleContainerConnected } from "@src/containers";

import "@styles/antd.default.less";

const styles = {
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
      <MainCard />
      <LocaleContainerConnected />
    </Layout>
  );
};
