import React, { PropTypes } from 'react';

const NotFound = ({ location }) =>
  <section className="card col-sm-6 col-sm-offset-3" style={{ marginTop: '10px' }}>
    <h4>Error 404.</h4>
    <p>Requested Resource: <strong>{`localhost:8080${location.pathname}`}</strong> not found.</p>
  </section>;

NotFound.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFound;
