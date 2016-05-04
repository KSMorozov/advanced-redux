import { expect } from 'chai';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('form new comment text body', () => {
  it('changes new comment text body', () => {
    expect(actions.changeNewCommentText({ target: { value: 'New Comment' } }))
      .to.eql({
        type: types.CHANGE_NEW_COMMENT_TEXT,
        text: 'New Comment',
      });
  });
});
