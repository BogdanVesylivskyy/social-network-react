// import React from 'react'

import './MyPosts.scss'
import Post from "./Post/Post";



function MyPosts() {
    return (
        <div className="postWrapper">
            <div>
                my post
            </div>

            <div>
                {/*<textarea>textarea</textarea>*/}
                <button>Add post</button>
            </div>

            <div className="posts">
                <Post massage="Hi, how are you " like="1" />
                <Post massage="It's my first post "  like="5" />
            </div>
        </div>
    );
}


export default MyPosts;
