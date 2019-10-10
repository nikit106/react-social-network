import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './userReducer';
// функция которая обединяет reducer мы создаем объект у которого есть свойство profileReducer со значением которое мы определили выше в import
let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;