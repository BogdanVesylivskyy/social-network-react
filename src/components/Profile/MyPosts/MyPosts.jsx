import React from 'react'

import './MyPosts.scss'
import Post from "./Post/Post";




function MyPosts(props) {

    let postElements = props.items.map(el => <Post id={el.id} message={el.message} likeCount={el.likeCount}/>)

    return (
        <div className="postWrapper">
            <div>
                <h3>my post</h3>
            </div>

            <div className='messages'>
                <div>
                    <textarea rows="10" name="description" defaultValue="This is a description." />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className="posts">
                {postElements}
                {/*<Post massage={postData[0].message} like={postData[0].likeCount}/>*/}
                {/*<Post massage={postData[1].message} like={postData[1].likeCount}/>*/}
            </div>
        </div>
    );
}


export default MyPosts;
