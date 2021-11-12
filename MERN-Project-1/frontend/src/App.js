import React from 'react';
import { BrowserRouter, Route, Redirect , Switch} from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import UserList from './users/components/UserList';

const DUMMY_PRODUCTS =[
  // {
  //   id:'1',
  //   name:'Ps5',
  //   price:'888'
  // }
];

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        <Route path="/user/list" exact >
          <UserList items={DUMMY_PRODUCTS}/>
        </Route>
        <Redirect to="/" />
      </Switch>

    </BrowserRouter>
  )
}

export default App;
