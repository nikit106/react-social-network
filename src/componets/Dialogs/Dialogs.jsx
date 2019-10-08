import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
       <div className = {classes.dialog + ' ' + classes.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div> 
    )
}
const Message = (props) => {
    return (
        <div className = {classes.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    
    let dialogsData = [
                       {id: 1,name: 'Nikita'},
                       {id: 2,name: 'Dima'},
                       {id: 3,name: 'Sveta'},
                       {id: 4,name: 'Sasha'},
                       {id: 5,name: 'Egor'},
                       {id: 6,name: 'Valera'},
                       {id: 7,name: 'Viktor'}]
    
    let messageData = [  
                         {id: 1,message: 'first message'},
                         {id: 2,message: 'second message'},
                         {id: 3,message: 'third message'}]
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <DialogItem name ={dialogsData[0].name} id ={dialogsData[0].id}/>
                <DialogItem name ={dialogsData[1].name} id ={dialogsData[1].id}/>
                <DialogItem name ={dialogsData[2].name} id ={dialogsData[2].id}/>
                <DialogItem name ={dialogsData[3].name} id ={dialogsData[3].id}/>
                <DialogItem name ={dialogsData[4].name} id ={dialogsData[4].id}/>
                <DialogItem name ={dialogsData[5].name} id ={dialogsData[5].id}/>
                <DialogItem name ={dialogsData[6].name} id ={dialogsData[6].id}/>
            </div>
            <div className = {classes.messages}>
                <Message message ={messageData[0].message}/>
                <Message message ={messageData[1].message}/>
                <Message message ={messageData[2].message}/>
            </div>
        </div>

    )

}

export default Dialogs;