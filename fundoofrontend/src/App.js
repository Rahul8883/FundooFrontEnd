import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/LoginPage';
import ServiceCardPage from './pages/ServiceCardPage';
import Registration from './pages/RegistrationPage';
import AppBarComponent from './component/AppBarComponent'
import Drawer from './pages/DrawerPage';
import dashboardPage from './pages/dashboardPage'
import createNotes from './pages/createNotesPage';
import GetCreatedNote from './pages/GetNotePage'
import colorPage from './pages/colorPage';
import ArchivePage from './pages/ArchivePage';
import MorePage from './pages/MorePage';
import profileImgPage from './pages/profileImgPage';
import getArchivePage from './pages/getArchivePage'
import {getTrashPage} from './pages/getTrashPage';
import QuesAnsComponent from "./component/QuesAnsComponent";
import Reminder from './component/Reminder';
import imageUpload from './component/imageUpload'
import Forgot from './component/Forgot'
import Ask from './component/Ask'
import queDisplay from './component/queDisplayComponent';
// import dragAndDrop from './component/dragAndDrop';
import shoppingCard from './component/shoppingCard';
import getReminderComponent from './component/getReminderComponent'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Registration}></Route>
          <Route path='/forgot' component={Forgot}></Route>
          <Route path='/' exact component={ServiceCardPage}></Route>
          <Route path='/appBar' component={AppBarComponent}></Route>
          <Route path='/drawer' component={Drawer}></Route>
          <Route path='/dashboard' component={dashboardPage}></Route>
          <Route path='/createNotes' component={createNotes}></Route>
          <Route path='/getCreatedNote' component={GetCreatedNote}></Route>
          <Route path='/colorPage' component={colorPage}></Route>
          <Route path='/archive' component={ArchivePage}></Route>
          <Route path='/morePage' component={MorePage}></Route>
          <Route path ='/profile' component={profileImgPage}></Route>
          <Route path='/getArchive' component={getArchivePage} ></Route>
          <Route path='/getTrash' component ={getTrashPage}></Route>
          <Route path ='/queAns' component = {QuesAnsComponent}></Route>
          <Route path ='/Reminder' component = {Reminder} ></Route>
          <Route path= '/imageUpload' component={imageUpload}></Route>
          <Route path= '/ask' component={Ask}></Route>
          <Route path= '/queDisplay' component={queDisplay}></Route>
          {/* <Route path= '/drag' component={dragAndDrop}></Route> */}
          <Route path= '/shopping' component={shoppingCard}></Route>
          <Route path= '/getReminder' component={getReminderComponent}></Route>


        </Switch>
      </Router>
    );
  }
}

export default App;
