import { Card } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { ListContainer } from "@src/containers";

export const MainCard: React.SFC = () => (
  <Card title={<FormattedMessage id="main.card.header" defaultMessage="Github users list" />}>
    <ListContainer />
  </Card>
);
