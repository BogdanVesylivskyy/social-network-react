import React from 'react'

import './ProfileInfo.scss'
import banner from "../../../assets/banner.jpg";


function ProfileInfo(props) {
    return (
        <>
            <div className="banner">
                <img src={banner} alt="img"/>
            </div>

            <div className="avatarWrapper">
                <div className="avatar">
                    <img src="https://toppng.com/uploads/preview/banner-frame-in-picsart-11549987902mawgklxvbs.png"/>
                </div>
                <div className="description">description</div>
            </div>
        </>
    )
}

export default ProfileInfo;
