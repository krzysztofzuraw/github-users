import * as React from "react";
import { connect } from "react-redux";

import { List } from "@src/components";
import { usersActions, usersSelectors } from "@src/features/users";
import Types from "Types";

const mapStateToProps = (state: Types.RootState) => ({
  users: usersSelectors.getFirstNUsers(state, 3),
  usersFetching: usersSelectors.usersFetching(state),
});

const mapDispatchToProps = {
  getUsers: usersActions.getUsersRequest,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export class ListContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { usersFetching, users, getUsers } = this.props;
    return <List items={users} loading={usersFetching} onReload={getUsers} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
