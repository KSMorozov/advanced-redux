import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../../components/App';
import CommentBox from '../../components/CommentBox';
import CommentList from '../../components/CommentList';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<App />);
  return renderer.getRenderOutput();
}

describe('App', () => {
  it('initial render', () => {
    const output = setup();
    const [commentBox, commentList] = output.props.children.constructor !== Array
      ? [output.props.children]
      : output.props.children;

    expect(output.type).to.equal('div');
    expect(output.props.className).to.equal('app');

    expect(commentBox.type).to.equal(CommentBox);

    expect(commentList.type).to.equal(CommentList);
  });
});
