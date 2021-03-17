import React from 'react'

import './MyPosts/MyPosts.scss'
import './ProfileInfo/ProfileInfo.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {

    let postData = [
        {id: 1, message: 'Hi, how are you ', likeCount: 1},
        {id: 2, message: 'It\'s my first post ', likeCount: 5}
    ]


    return (
        <div className="profileWrapper">
            <ProfileInfo/>
            <MyPosts items={postData} />
        </div>
    );
}


export default Profile;
