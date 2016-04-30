import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const data = ['New Comment', 'Other New Comment'];

const App = () =>
  <div className="app">
    <CommentBox />
    <CommentList comments={data} />
  </div>;

export default App;
