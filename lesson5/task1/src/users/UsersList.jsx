import React, { Component } from "react";
import { connect } from 'react-redux';
import User from './User';
import Pagination from "./Pagination";
import * as usersActions from './users.actions';
import { usersListSelector, currentPageSelector, usersPageSelector } from './users.selectors'

class UsersList extends Component {
  render() {
    const { users, userPage, currentPage, goPrev, goNext } = this.props;
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={userPage.length}
          totalItems={users.length}
          goPrev={goPrev}
          goNext={goNext}
        />
        <ul className="users">
          {userPage.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    )
  }
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
    userPage: usersPageSelector(state),
  };
};

const mapDispatch = {
  goNext: usersActions.goNext,
  goPrev: usersActions.goPrev,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
