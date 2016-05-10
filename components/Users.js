import React, { PropTypes } from 'react';
import UserList from './UserList';

const Users = ({ users }) =>
  <section className="col-sm-12">
    <UserList users={users} />
  </section>;

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
