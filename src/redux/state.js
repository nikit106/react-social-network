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
                           {id: 7,name: 'Viktor'}] 
}
},
    getState() {
        return this._state;
    },
    _callSubscriber()  {
        console.log('state is changed');
    },
  /*  addPost() {
         let newPost = {
             id: 5,
             message: this._state.profilePage.newPostText,
             likeCounts: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
 }, */
    /*updateNewPostText(newText) {
     this._state.profilePage.newPostText = newText;
     this._callSubscriber(this._state); 
 },*/
    subscribe(observer) {
     this._callSubscriber = observer; // патерн observer Publisher-subscriber
 },
    
    dispatch(action) {
        if (action.type === 'ADD-POST') {
           let newPost = {
             id: 5,
             message: this._state.profilePage.newPostText,
             likeCounts: 0
         };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);          
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
}
        
}
    
export default store;
window.store = store;