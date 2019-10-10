import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {follow, unfollow,setUsers,setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/userReducer";

class UsersContainer extends React.Component {    
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                  .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);       
                    this.props.setTotalUsersCount(response.data.totalCount);       
              });   
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                  .then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(response.data.items);       
              });  
    }
    
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount = {this.props.totalUsersCount}
                          pageSize = {this.props.pageSize}
                          currentPage = {this.props.currentPage}
                          onPageChanged = {this.onPageChanged}
                          users = {this.props.users}
                          follow = {this.props.follow}
                          unfollow = {this.props.unfollow}
                    />
               </>
    }
}

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
} // mapStateToProps принимает весь state целиком глобальный state всего приложения и возвращает обект только с теми данными что нам нужны из state. В нашем случае список пользователей. Возвращает объект который по итогу нам из state дастает свойство(значения/данные). 

/*
let mapDispatchToProps = (dispatch) => {
    return { // каждый callback 
        follow: (userId) => { // передается в компоненту, компонента вызывает callback передаваю параметр
            dispatch(followAC(userId)); // вызываем actionCreator этим же параметром и мы диспатчем объект
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}// mapDispatchToProps служит для того чтобы передавать дочерний презентационные компоненты(кнопка на экране) через props callback - функции которые будут вызыватать. Возвращает объект в котором есть callback. Каждый callback что то диспатчит в store и что то там происходит. Там что то произошло и заново срабатывает функция mapStateToProps
*/
/*Теперь это все уже в connect */
export default connect(mapStateToProps, {follow,unfollow,setUsers,
                                         setCurrentPage,setTotalUsersCount,
                                         toggleIsFetching})(UsersContainer);

       