import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = () => {
    
    
let postData = [  
                    {id: 1,message: 'Hi, how are you',   likeCounts: 0},
                    {id: 2,message: 'Its my first post', likeCounts: 20}]


    
    return <div className = {classes.content}>
            <div className = {classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                      <textarea></textarea>
                    </div>
                    <div>
                      <button>Add posts</button>
                    </div>
                </div>
                <div className = {classes.posts}>
                    <Post message = {postData[0].message} likeCounts = {postData[0].likeCounts}/>
                    <Post message = {postData[1].message} likeCounts = {postData[1].likeCounts}/>
                </div>
            </div>
    </div>
}
    
export default MyPosts;