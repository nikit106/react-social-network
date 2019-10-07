import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = () => {
    return <div className = {classes.content}>
            <div>
                <div>
                    My posts
                </div>
                <div>
                    news posts
                </div>
                <div className = {classes.posts}>
                    <Post message = 'Hi, how are you' />
                    <Post message = 'Its my first post'/>
                </div>
            </div>
    </div>
}
    
export default MyPosts;