import React, { Component } from "react";
import { connect } from 'react-redux';
import User from './User';
import Pagination from "./Pagination";
import * as usersActions from './users.actions';

class UsersList extends Component {
  render() {
    const { users, userPage, currentPage, toogleNextPage, tooglePrevPage } = this.props;
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          itemPerPage={userPage.length}
          totalItems={users.length}
          goPrev={tooglePrevPage}
          goNext={toogleNextPage}
        />
        <ul className="users">
          {userPage.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    )
  }
};

const mapState = state => {
  return {
    users: state.users,
    currentPage: state.currentPage,
    userPage: state.usersPage,
  };
};

const mapDispatch = {
  toogleNextPage: usersActions.toogleNextPage,
  tooglePrevPage: usersActions.tooglePrevPage,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
