import { expect } from 'chai';
import comments from '../../reducers/comments';
import * as types from '../../constants/ActionTypes';

describe('comments reducer', () => {
  it('should handle initial state', () => {
    expect(comments(undefined, {}))
      .to.eql([]);
  });

  it('should handle ADD_COMMENT', () => {
    expect(
      comments([], {
        type: types.ADD_COMMENT,
        text: 'Run the tests',
      })
    ).to.eql([
      {
        text: 'Run the tests',
        id: 0,
      },
    ]);

    expect(
      comments([
        {
          text: 'New Comment',
          id: 0,
        },
      ], {
        type: types.ADD_COMMENT,
        text: 'Run the tests',
      })
    ).to.eql([
      {
        text: 'Run the tests',
        id: 1,
      },
      {
        text: 'New Comment',
        id: 0,
      },
    ]);

    expect(
      comments([
        {
          text: 'Run the tests',
          id: 1,
        },
        {
          text: 'New Comment',
          id: 0,
        },
      ], {
        type: types.ADD_COMMENT,
        text: 'Fix the tests',
      })
    ).to.eql([
      {
        text: 'Fix the tests',
        id: 2,
      },
      {
        text: 'Run the tests',
        id: 1,
      },
      {
        text: 'New Comment',
        id: 0,
      },
    ]);
  });
});
