import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from './pages/LoginPage'
import ServiceCardPage from './pages/ServiceCardPage'; 
import Registration from './pages/RegistrationPage';
import Forgot from './pages/ForgotPage';
import AppBar from './pages/AppBarPage';
import loginServiceCard from './pages/loginServicecardPage'
function App() {
  return (
   <Router>
     <Switch>
       <Route path='/login' component ={Login}></Route>
       <Route path='/register' component={Registration}></Route>
       <Route path='/servicePage' exact component ={ServiceCardPage}></Route>
       <Route path='/forgot' component={Forgot}></Route>
       <Route path='/appBar' component={AppBar}></Route>
       <Route path='/loginServicecard' component ={loginServiceCard}></Route>
     </Switch>
   </Router>
  );
}

export default App;
