import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import CommentBox from '../../components/CommentBox';

function setup() {
  const renderer = TestUtils.createRenderer();
  renderer.render(<CommentBox />);
  const output = renderer.getRenderOutput();
  return {
    output,
    renderer,
  };
}

describe('CommentBox', () => {
  it('initial render', () => {
    const { output } = setup();
    const [textarea, button] = output.props.children;

    expect(output.type).to.equal('form');
    expect(output.props.className).to.equal('comment-box');

    expect(textarea.type).to.equal('textarea');

    expect(button.type).to.equal('button');
  });

  it('shows text in the textarea', () => {
    const { output, renderer } = setup();
    const textarea = output.props.children[0];
    expect(textarea.props.value).to.equal('');

    textarea.props.onChange({ target: { value: 'hello' } });
    const updated = renderer.getRenderOutput();
    expect(updated.props.children[0].props.value).to.equal('hello');
  });

  it('clears input, when comment submitted', () => {
    const { output, renderer } = setup();
    const textarea = output.props.children[0];
    textarea.props.onChange({ target: { value: 'hello' } });
    output.props.onSubmit({ preventDefault: () => {} });
    const updated = renderer.getRenderOutput();

    expect(updated.props.children[0].props.value).to.equal('');
  });
});
