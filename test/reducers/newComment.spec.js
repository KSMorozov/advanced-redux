import { expect } from 'chai';
import newComment from '../../reducers/newComment';
import * as types from '../../constants/ActionTypes';

describe('new comment reducer', () => {
  it('should handle initial state', () => {
    expect(newComment(undefined, {}))
      .to.equal('');
  });

  it('should handle CHANGE_NEW_COMMENT_TEXT', () => {
    expect(newComment('', {
      type: types.CHANGE_NEW_COMMENT_TEXT,
      text: 'New Comment',
    })).to.equal('New Comment');

    expect(newComment('Hey there', {
      type: types.CHANGE_NEW_COMMENT_TEXT,
      text: 'New Comment',
    })).to.equal('New Comment');
  });
});
