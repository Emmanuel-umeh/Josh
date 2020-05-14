import React from 'react';
import logo from './logo.svg';
// import './App.css';

import HomePage from './components/Home'

import {
  Route,
  NavLink,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
class App extends React.Component {

  

  render(){
    return (
      <Router>
      <Switch>
      
  
  
  
  
             <Route exact path="/"
             >
        <HomePage
    
        />
      </Route>
  
  <Route >
        <HomePage />
      </Route>
  
  {/* 
     */}
  </Switch>
  
  
  
  </Router>
  
    );
  }

}

export default App;
