import React from 'react'

import './Post.scss'
// import '../../../Navbar/Navbar'


function Post(props) {
    return (
        <div className="item">
            <img src="https://www.vokrug.tv/pic/person/d/2/f/6/d2f68a00833e2bb574becedff71d406a.jpeg" />
            <div>
                <span>{props.message}</span>
                <span>{props.likeCount} {(props.likeCount > 1) ? " likes" : " like"}</span>
            </div>
        </div>
    );
}


export default Post;
