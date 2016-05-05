import React, { PropTypes } from 'react';
import User from './User';

const UserList = ({ users }) =>
  <div className="card-group">
    {users.map((user, i) =>
      <User key={i}
        company={user.company.name}
        website={user.website}
        email={user.email}
        name={user.name} />)
    }
  </div>;

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
