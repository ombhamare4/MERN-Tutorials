import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import UserList from './users/components/UserList';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <BrowserRouter>

      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route path="/user/list" exact >
          <UserList />
        </Route>
        <Route path="/:placeId/places" exact >
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>

    </BrowserRouter>
  )
}

export default App;
