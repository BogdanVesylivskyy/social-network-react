// import React from 'react'

import './Profile.scss'
import banner from "../../assets/banner.jpg";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className="profileWrapper">
            <div className="banner">
                <img src={banner} alt="img"/>
            </div>

            <div className="avatarWrapper">
                <div className="avatar"> <img src="https://toppng.com/uploads/preview/banner-frame-in-picsart-11549987902mawgklxvbs.png" /></div>
                <div className="description">description</div>
            </div>

            <MyPosts />
        </div>
    );
}


export default Profile;
