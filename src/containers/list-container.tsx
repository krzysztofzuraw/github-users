import { Avatar, Button, Card, List } from "antd";
import * as React from "react";
import { connect } from "react-redux";

import { usersActions, usersSelectors } from "@src/features/users";
import { IUser } from "@src/models";
import Types from "Types";

const mapStateToProps = (state: Types.RootState) => ({
  users: usersSelectors.getUsers(state),
  usersFetching: usersSelectors.usersFetching(state),
});

const mapDispatchToProps = {
  getUsers: usersActions.getUsersRequest,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

class Component extends React.Component<Props> {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { usersFetching, users } = this.props;
    return (
      <List
        itemLayout="horizontal"
        dataSource={users}
        loadMore={
          <div>
            <Button>Refresh</Button>
          </div>
        }
        loading={usersFetching}
        renderItem={(item: IUser) => (
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
    );
  }
}

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
