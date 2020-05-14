import React from 'react';
import logo from './logo.svg';
// import './App.css';

import HomePage from './components/Home'
import Contact from "./components/homepage/contact"
import About from "./components/homepage/about"
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

      <React.Fragment>
      <div id="preloder">
        <div class="loader"></div>
      </div>
    
    
    
      
      <Router>
       <Switch>
      
  
  
       <Route  path="/contact" >
         
         <Contact />
           
     </Route>
     <Route  path="/about">
         
         <About />
           
     </Route>
 
            <Route exact path="/" >
         
              <HomePage />
                
          </Route>
      
  <Route >
        <HomePage />
      </Route>
  
  </Switch>
  
  
  
  </Router>
    
    
    
    
    
      </React.Fragment>

    );
  }

}

export default App;




  