import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src = "https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
            </div>
            <div className = {classes.descriptionBlock}>
                ava + description
            </div>
        </div>    
    )
}
    
export default ProfileInfo;