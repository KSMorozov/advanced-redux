import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  render() {
    return (
      <div className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={(e) => { this.setState({ comment: e.target.value }); }} />
        <button
          onClick={(e) => { e.preventDefault(); this.setState({ comment: '' }); }}>
          Submit Comment!
        </button>
      </div>
    );
  }
}

export default CommentBox;
