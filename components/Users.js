import React, { PropTypes } from 'react';
import UserList from './UserList';

const Users = ({ users }) =>
  <section>
    <UserList users={users} />
  </section>;

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
