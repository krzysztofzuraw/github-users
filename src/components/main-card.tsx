import { Avatar, Button, Card, List } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

import { ListContainer } from "@src/containers";

export const MainCard: React.SFC = () => {
  return (
    <Card title={<FormattedMessage id="main.card.header" defaultMessage="Who to follow" />}>
      <ListContainer />
    </Card>
  );
};
