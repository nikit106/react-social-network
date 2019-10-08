import React from 'react';
import classes from './Post.module.css';



const Post = (props) => {
    return <div className = {classes.item}>
        { props.message }
        <span>like </span>{ props.likeCounts }
           </div>
               
}
    
export default Post;