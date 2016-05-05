import React, { PropTypes } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const Comments = ({ comments, newComment, actions }) =>
  <section>
    Comments Section:
    <CommentList comments={comments} />
    <CommentBox
      changeNewCommentText={actions.changeNewCommentText}
      newComment={newComment}
      addComment={actions.addComment} />
  </section>;

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  newComment: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Comments;
