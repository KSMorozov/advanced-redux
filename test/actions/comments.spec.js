import { expect } from 'chai';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions';

describe('comments actions', () => {
  it('adds comment', () => {
    expect(actions.addComment('New Comment'))
      .to.eql({
        type: types.ADD_COMMENT,
        text: 'New Comment',
      });
  });
});
