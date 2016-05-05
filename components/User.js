import React, { PropTypes } from 'react';

const User = ({ name, company, email, website }) =>
  <div className="card card-block col-sm-4">
    <h4 className="card-title">{name}</h4>
    <p className="card-text">{company}</p>
    <p className="card-text">{email}</p>
    <a className="btn btn-primary" style={{ borderRadius: '0px' }} href={`https://www.${website}`}>{website}</a>
  </div>;

User.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default User;
