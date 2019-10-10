import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src = "https://www.w3schools.com/howto/img_snow_wide.jpg"></img>
            </div>
            <div className = {classes.descriptionBlock}>
                <img src = {props.profile.photos.large}/>
                ava + description
            </div>
        </div>    
    )
}
    
export default ProfileInfo;