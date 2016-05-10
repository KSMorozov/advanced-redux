import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/';
import Header from './Header';

const App = ({ children, newComment, comments, actions, loggedIn, users }) =>
  <div className="app row">
    <Header loggedIn={loggedIn} authenticate={actions.authenticate} />
    {
      children && React.cloneElement(children, {
        newComment,
        comments,
        loggedIn,
        actions,
        users,
      })
    }
  </div>;

App.propTypes = {
  newComment: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node,
  actions: PropTypes.object.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    newComment: state.newComment,
    comments: state.comments,
    loggedIn: state.authentication,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
