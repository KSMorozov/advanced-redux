import { takeEvery } from 'redux-saga';
import { FETCH_USERS } from '../constants/ActionTypes';
import { fetchUsers } from './users';

export default function *rootSaga() {
  yield* takeEvery(FETCH_USERS, fetchUsers);
}
