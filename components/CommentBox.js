import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  render() {
    return (
      <form
        onSubmit={(e) => { e.preventDefault(); this.setState({ comment: '' }); }}
        className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={(e) => { this.setState({ comment: e.target.value }); }} />
        <button type="submit">
          Submit Comment!
        </button>
      </form>
    );
  }
}

export default CommentBox;
