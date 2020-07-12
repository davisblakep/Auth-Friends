import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import NavAppBar from './components/NavAppBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

// Test private route by entering command:
//  window.localStorage.clear(); 
// in web console, then refresh page

function App() {
  return (
    <div>
      <NavAppBar />
    <div className="App">
      <Route exact path="/">
      <HomePage />
     </Route>
     <Route path="/login">
       <LoginPage />
     </Route>
     <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
    </div>
  );
}

export default App;
