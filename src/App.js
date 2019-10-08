import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';




const App = (props) => {
  return (
      
      <BrowserRouter>
      
        <div className = 'app-wrapper'>
             <Header />
             <Navbar />
            <div class = 'app-wrapper-content'>
              <Route path = "/dialogs" component = {Dialogs}/>
              <Route path = "/profile" component = {Profile}/> 
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App;
