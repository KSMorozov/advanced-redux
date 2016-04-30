import React, { PropTypes } from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) =>
  <ul className="comment-list">
    {comments.map((comment) => <Comment key={comment} text={comment} />)}
  </ul>;

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
