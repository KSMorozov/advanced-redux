import React, { PropTypes } from 'react';

const Comment = ({ text }) =>
  <li>{text}</li>;

Comment.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Comment;
