import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import sidebarReducer from './sidebarReducer.js';


let store = {
    _state : {
    
    profilePage: {
         posts: [  
                           {id: 1,message: 'Hi, how are you',   likeCounts: 0},
                           {id: 2,message: 'Its my first post', likeCounts: 20}] ,
         newPostText: 'write here'
    }, 
    dialogsPage: {
        messages: [
                       {id: 1,message: 'first message'},
                       {id: 2,message: 'second message'},
                       {id: 3,message: 'third message'}] ,
        dialogs: [
                           {id: 1,name: 'Nikita'},
                           {id: 2,name: 'Dima'},
                           {id: 3,name: 'Sveta'},
                           {id: 4,name: 'Sasha'},
                           {id: 5,name: 'Egor'},
                           {id: 6,name: 'Valera'},
                           {id: 7,name: 'Viktor'}] ,
        newMessageBody: ''
},
    sidebarPage: {}
},
    getState() {
        return this._state;
    },
    _callSubscriber()  {
        console.log('state is changed');
    },
    subscribe(observer) {
     this._callSubscriber = observer; // патерн observer Publisher-subscriber
 }, 
    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        
        this._callSubscriber(this._state);
        
    }   
      
}
    
export default store;
window.store = store;