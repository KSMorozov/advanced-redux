import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import { Enhance } from './hocs/Enhance';
import Auth from './hocs/Auth';

export default (
  <Route path="/" component={App}>
    <Route path="comments" component={Enhance(Main, [Auth])} />
  </Route>
);
