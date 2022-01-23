
import './App.css';
import Header from './Header';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router, Switch ,Route}
from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import React, { useEffect } from 'react';
function App() {

const [{},dispatch] = useStateValue();
useEffect(()=>{
//will only run thr once when the app componant load
auth.onAuthStateChanged(authUser=>{
  console.log('THE USER >>>',authUser);
  if(authUser){
    
    dispatch({
      type:'SET_USER',
      user:authUser
    });
    
    //the user just logged in / user was logged
  }
  else{
    dispatch({
      type:'SET_USER',
      user:null,
    });
  }
});
},[]);                         

  
  return (
    //Bem Convention

  <Router>
    <div className="app">


  <Switch>

  <Route path="/login">
    <h2>Login</h2>
    <Login />
    </Route>

   <Route path="/checkout">
    <Header/>
    <Checkout/> 
    </Route>
    <Route path="/">
    <Header/>
    <Home/>
    </Route>
    </Switch>
     </div>
    </Router>
  );
}

export default App;
