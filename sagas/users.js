import { call, put } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch';
import * as AppActions from '../actions/';

export function *fetchUsers() {
  const users = yield (yield call(fetch, 'http://jsonplaceholder.typicode.com/users')).json();
  yield put(AppActions.receiveUsers(users));
}
