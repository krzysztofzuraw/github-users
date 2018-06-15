import { Avatar, Button, Card, List } from "antd";
import * as React from "react";
import { FormattedMessage } from "react-intl";

export const MainCard: React.SFC = () => {
  return (
    <Card title={<FormattedMessage id="main.card.header" defaultMessage="Who to follow" />}>
      <List
        itemLayout="horizontal"
        dataSource={["1", "2", "3"]}
        loadMore={
          <div>
            <Button>Refresh</Button>
          </div>
        }
        renderItem={(item: any) => (
          <List.Item actions={[<a>follow</a>]}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="User Name"
              description="User description goes here"
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
