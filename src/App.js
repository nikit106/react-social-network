import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from 'react-router-dom';





const App = (props) => {
  return (
        <div className = 'app-wrapper'>
             <Header />
             <Navbar />
            <div className = 'app-wrapper-content'>
              <Route path = "/dialogs" 
                    render = { () => <DialogsContainer /*store = {props.store}*/ /> }/>
              <Route path = "/profile" 
                    render = { () => <Profile /*store = {props.store}*/ /> }/>
            </div>
        </div>
  )
}

export default App;


