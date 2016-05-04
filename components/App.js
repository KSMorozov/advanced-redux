import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/';
import Header from './Header';

const App = ({ children, newComment, comments, actions, loggedIn }) =>
  <div className="app">
    <Header loggedIn={loggedIn} authenticate={actions.authenticate} />
    {
      children && React.cloneElement(children, {
        comments,
        newComment,
        actions,
        loggedIn,
      })
    }
  </div>;

App.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  newComment: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  children: PropTypes.node,
  loggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    comments: state.comments,
    newComment: state.newComment,
    loggedIn: state.authentication,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
