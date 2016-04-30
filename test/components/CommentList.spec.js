import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import CommentList from '../../components/CommentList';
import Comment from '../../components/Comment';

function setup() {
  const props = { comments: ['New Comment', 'Other New Comment'] };
  const renderer = TestUtils.createRenderer();
  renderer.render(<CommentList {...props} />);
  const output = renderer.getRenderOutput();
  return {
    output,
    renderer,
  };
}

describe('CommentList', () => {
  it('initial render', () => {
    const { output } = setup();
    const list = output.props.children;

    expect(output.type).to.equal('ul');
    expect(output.props.className).to.equal('comment-list');

    expect(list.length).to.equal(2);
    list.forEach((item) => expect(item.type).to.equal(Comment));
    expect(list[0].props.text).to.equal('New Comment');
    expect(list[1].props.text).to.equal('Other New Comment');
  });
});
