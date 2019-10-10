//++++++++
import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import {Route} from 'react-router-dom';
import UsersContainer from './componets/Users/UsersContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';

const App = () => {
  return (
        <div className = 'app-wrapper'>
             <Header />
             <Navbar />
            <div className = 'app-wrapper-content'>
              <Route path = "/dialogs" 
                    render = { () => <DialogsContainer /> }/>
    
              <Route path = "/profile" 
                    render = { () => <ProfileContainer /> }/>
                        
              <Route path = "/users" 
                    render = { () => <UsersContainer /> }/>
            </div>
        </div>
  )
}

export default App;


