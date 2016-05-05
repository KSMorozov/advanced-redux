import React from 'react';
import { Route } from 'react-router';
import { Enhance } from './hocs/Enhance';
import Auth from './hocs/Auth';
import Data from './hocs/Data';
import Comments from './components/Comments';
import Users from './components/Users';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <Route path="comments" component={Enhance(Comments, [Auth])} />
    <Route path="users" component={Enhance(Users, [Auth, Data])} />
  </Route>
);
