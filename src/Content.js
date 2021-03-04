import React from 'react'

import './Content.scss'
import banner from "./banner.jpg";



function Content() {
    return (
        <div className="contentContainer">
            <div className="banner">
                <img
                    src={banner}
                    alt="img"/>
            </div>

            <div className="avatarWrapper">
                <div className="avatar"> <img src="https://toppng.com/uploads/preview/banner-frame-in-picsart-11549987902mawgklxvbs.png" /></div>
                <div className="description">description</div>
            </div>
            <div>
                my post
            </div>

            <div>
                new post
            </div>

            <div>
                <div>post1</div>
                <div>post2</div>
            </div>

        </div>
    );
}


export default Content;
