import { Avatar, Button, List as AntList } from "antd";
import * as React from "react";
import { style as tss } from "typestyle";

import { IUser } from "@src/models";

interface IProps {
  items: IUser[];
  loading: boolean;
  onReload: () => void;
}

const styles = {
  actions: tss({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  }),
};

export const List: React.SFC<IProps> = ({ items, loading, onReload }) => {
  return (
    <AntList
      itemLayout="horizontal"
      dataSource={items}
      loadMore={
        <div className={styles.actions}>
          <Button onClick={onReload}>Refresh</Button>
        </div>
      }
      loading={loading}
      renderItem={(item: IUser) => (
        <AntList.Item actions={[<a href={item.htmlUrl}>Profile</a>]}>
          <AntList.Item.Meta
            avatar={<Avatar src={item.avatarUrl} />}
            title={item.login}
            description={item.bio || "No description"}
          />
        </AntList.Item>
      )}
    />
  );
};
