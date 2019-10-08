let Tree = () => {
    console.log('state is changed')
}

let state = {
    
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
}
    
 export const addPost = () => {
     let newPost = {
         id: 5,
         message: state.profilePage.newPostText,
         likeCounts: 0
     };
     state.profilePage.posts.push(newPost);
     state.profilePage.newPostText = '';
     Tree(state);
 } 
 
 export const updateNewPostText = (newText) => {
     state.profilePage.newPostText = newText;
     Tree(state);
 } 
 
 export const subscribe = (observer) => {
     Tree = observer; // патерн observer Publisher-subscriber
 }
    
export default state;
   