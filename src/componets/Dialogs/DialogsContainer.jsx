import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
//import classes from './Dialogs.module.css';
//import Message from './Message/Message';
//import DialogItem from './DialogItem/DialogItem';
//import {NavLink} from "react-router-dom";

let mapStateToProps = (state) => { // настраивает свойства которые мы возьмем из state
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => { // callback которые мы булем отправялть в нашу  презентационную компоненту
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs); // возвращает новую контейнерную компоненту

export default DialogsContainer;