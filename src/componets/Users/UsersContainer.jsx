import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, unfollowAC,setUsersAC} from "../../redux/userReducer";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
} // mapStateToProps принимает весь state целиком глобальный state всего приложения и возвращает обект только с теми данными что нам нужны из state. В нашем случае список пользователей


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}// служит для того чтобы передавать дочерний презентационные компоненты(кнопка на экране) через props callback - функции которые будут вызыватать

export default connect(mapStateToProps, mapDispatchToProps) (Users);