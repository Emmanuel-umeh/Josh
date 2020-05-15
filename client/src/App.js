import React from 'react';
import logo from './logo.svg';
// import './App.css';

import HomePage from './components/Home'
import Contact from "./components/homepage/contact"
import About from "./components/homepage/about"
import {connect} from 'react-redux'
import {clearErrors} from './actions/errorActions'
import { loadUser, logout } from "./actions/authActions";
import {getItems} from "./actions/itemActions"
import {
  Route,
  NavLink,
  Link,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Login from './components/Authentication/Login';




import store from './store'
import SignUp from './components/Authentication/SignUp';
import Cart from './components/Cart/cart';
class App extends React.Component {


  componentDidMount() {

    // this.setState({
    //   loader : true
    // })
    store.dispatch(getItems());
    store.dispatch(loadUser());
 
  
  //   Pusher.logToConsole = true;
  
  //   var pusher = new Pusher('fdc10afe6e0eeba7b641', {
  //     cluster: 'us2'
  //   });
  
  //   var channel = pusher.subscribe('SociaRIot');
  //   const {user} = this.props.auth
  //   channel.bind('Job-sent', function(data) {
  //     // alert(JSON.stringify(data));
  //     console.log("pusher data ", data)
  //     console.log("user ", user)
  //     console.log("influencer id", data.influencerID)
  // if(user){
  //   if(data.influencerID=== user.id ){
  //     // alert("New notification")
  //     this.setState({
  //       notification : true
  //     })
  //   }
  // }
     
     
    // });
  
    // setTimeout(() => {
    //   this.setState({ loader: false });
    //   // console.clear()
    //   }, 2000);
  }
  

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

     <Route  path="/cart" >
          
     <Cart />
      
           
     </Route>


     <Route  path="/login" >
         
         <Login />
           
     </Route>

     <Route  path="/signup" >
         
         <SignUp />
           
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

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error,
  items : state.items
});
export default connect(mapStateToProps, {clearErrors, logout})(
  App
);