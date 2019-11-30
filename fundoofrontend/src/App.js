import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/LoginPage'
import ServiceCardPage from './pages/ServiceCardPage';
import Registration from './pages/RegistrationPage';
// import Forgot from './pages/ForgotPage';
import AppBar from './pages/AppBarPage';
import Drawer from './pages/DrawerPage';
import dashboardPage from './pages/dashboardPage'
import createNotes from './pages/createNotesPage';
import GetCreatedNote from './pages/GetNotePage'
import colorPage from './pages/colorPage';
import ArchivePage from './pages/ArchivePage';
// import morePage from './pages/MorePage'
import MorePage from './pages/MorePage';
import profileImgPage from './pages/profileImgPage';
import ReminderPage from "./pages/ReminderPage";
import getArchivePage from './pages/getArchivePage'
// import getTrashComponent from './component/getTrashComponent'
import {getTrashPage} from './pages/getTrashPage'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Registration}></Route>
          <Route path='/' exact component={ServiceCardPage}></Route>
          {/*<Route path='/forgot' component={Forgot}></Route>*/}
          <Route path='/appBar' component={AppBar}></Route>
          <Route path='/drawer' component={Drawer}></Route>
          <Route path='/dashboard' component={dashboardPage}></Route>
          <Route path='/createNotes' component={createNotes}></Route>
          <Route path='/getCreatedNote' component={GetCreatedNote}></Route>
          <Route path='/colorPage' component={colorPage}></Route>
          <Route path='/archive' component={ArchivePage}></Route>
          <Route path='/morePage' component={MorePage}></Route>
          <Route path ='/profile' component={profileImgPage}></Route>
          <Route path='/reminder' component={ReminderPage} ></Route>
          <Route path='/getArchive' component={getArchivePage} ></Route>
          <Route path='/getTrash' component ={getTrashPage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
