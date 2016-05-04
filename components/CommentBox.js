import React, { PropTypes } from 'react';

const handleFormSubmit = (changeNewCommentText, addComment, newComment, e) => {
  e.preventDefault();
  addComment(newComment);
  changeNewCommentText({ target: { value: '' } });
};

const CommentBox = ({ newComment, changeNewCommentText, addComment }) =>
  <form
    onSubmit={handleFormSubmit.bind(this, changeNewCommentText, addComment, newComment)}
    className="form-group col-sm-6 col-sm-offset-3">
    <textarea
      className="form-control"
      value={newComment}
      onChange={changeNewCommentText} />
    <button
      style={{ borderRadius: '0px', marginTop: '10px' }}
      className="btn btn-default"
      type="submit" >
      Submit Comment!
    </button>
  </form>;

CommentBox.propTypes = {
  changeNewCommentText: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default CommentBox;
