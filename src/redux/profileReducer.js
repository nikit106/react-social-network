const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
//используем константы чтобы не использовать строки и не ошибиться

let initialState = {

         posts: [  
                {id: 1,message: 'Hi, how are you',   likeCounts: 0},
                {id: 2,message: 'Its my first post', likeCounts: 20}] ,
         newPostText: 'write here'

};

export const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
             id: 5,
             message: state.newPostText,
             likeCounts: 0
         };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };        
        }  
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }    
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;