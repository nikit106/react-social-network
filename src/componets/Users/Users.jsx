import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    
  if (props.users.length === 0) {
    props.setUsers([
         {id: 1, 
        photoUrl: 'https://img1.liveinternet.ru/images/attach/d/1/131/379/131379541_ugryumuyy_pes_anuko_foto_3.jpg',
        followed: true, 
        fullName: 'Nikita', 
        status: 'i am a boss', 
        location: {sity: 'Moscow', country : 'Russia'}},
        {id: 2, 
        photoUrl: 'https://img1.liveinternet.ru/images/attach/d/1/131/379/131379541_ugryumuyy_pes_anuko_foto_3.jpg', 
        followed: false, 
        fullName: 'Dima', 
        status: 'lets go', 
        location: {sity: 'Minsk', country : 'Belarus'}},
        {id: 3, 
        photoUrl: 'https://img1.liveinternet.ru/images/attach/d/1/131/379/131379541_ugryumuyy_pes_anuko_foto_3.jpg', 
        followed: true, 
        fullName: 'Natasha', 
        status: 'ok', 
        location: {sity: 'Kiev', country : 'Ukraine'}},
        {id: 4, 
        photoUrl: 'https://img1.liveinternet.ru/images/attach/d/1/131/379/131379541_ugryumuyy_pes_anuko_foto_3.jpg', 
        followed: true, 
        fullName: 'Igor', 
        status: 'yo', 
        location: {sity: 'Minsk', country : 'Belarus'}}
    ])
  }  
    return <div>
            {
                props.users.map( u => <div key = {u.id}>
                                <span>  
                                    <div>
                                        <img src = {u.photoUrl} className = {styles.userPhoto} />
                                    </div>
                                    <div>
                                        {u.followed 
                                            ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button> 
                                            : <button onClick = {() => {props.follow(u.id)}}>Follow</button>
                                        }
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>{u.fullName}</div>
                                        <div>{u.status}</div>
                                    </span>
                                    <span>
                                        <div>{u.location.country}</div>
                                        <div>{u.location.city}</div>
                                    </span>
                                </span>
                </div>)
            }
           </div>
        
}

export default Users;