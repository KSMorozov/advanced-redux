import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Authenticate = ({ loggedIn, authenticate }) => (
  loggedIn
  ? (<a
    className="nav-link"
    onClick={authenticate.bind(this, false)}
    style={{ cursor: 'pointer' }}>
    Logout
  </a>)
  : (<a
    className="nav-link"
    onClick={authenticate.bind(this, true)}
    style={{ cursor: 'pointer' }}>
    Login
  </a>)
);

Authenticate.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
};

const Header = ({ loggedIn, authenticate }) =>
  <nav className="navbar navbar-light bg-faded">
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="comments">Comments</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="users">Users</Link>
      </li>
      <li className="nav-item">
        <Authenticate loggedIn={loggedIn} authenticate={authenticate} />
      </li>
    </ul>
  </nav>;

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export default Header;
