const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
//используем константы чтобы не использовать строки и не ошибиться

let initialState = {
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

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
            
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
            
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''; //зануляем
            state.messages.push({id: 4,message: body}); //пушим новое сообщение
            return state;
            
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;