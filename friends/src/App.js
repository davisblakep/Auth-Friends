import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import NavAppBar from './components/NavAppBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AddFriendPage from './components/AddFriendPage'

// Test private route by entering command:
//  localStorage.removeItem("token")
// in web console, then refresh page

function App() {
  return (
    <div>
      <NavAppBar />
    <div className="App">
      <Switch>
      <Route exact path="/">
      <HomePage />
     </Route>
     <Route path="/login">
       <LoginPage />
     </Route>
     <PrivateRoute exact path="/dashboard" component={Dashboard} />
     <PrivateRoute path="/dashboard/addfriend" component={AddFriendPage} />
     </Switch>
    </div>
    </div>
  );
}

export default App;
