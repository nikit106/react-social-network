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
                    <Post message = 'Hi, how are you' likeCounts = '0' />
                    <Post message = 'Its my first post' likeCounts = '20'/>
                </div>
            </div>
    </div>
}
    
export default MyPosts;