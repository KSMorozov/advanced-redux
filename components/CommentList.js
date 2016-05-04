import React, { PropTypes } from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) =>
  <ul className="comment-list col-sm-12">
    {comments.map((comment) => <Comment key={comment.id} text={comment.text} />)}
  </ul>;

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
