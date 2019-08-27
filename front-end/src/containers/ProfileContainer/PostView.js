import React from 'react';
// import {Link} from 'react-router-dom';


const PostView = ({userPosts}) => {
    console.log(userPosts)
    return (
        <>
            <div className="post-container">
                <h1>Post Page</h1>
                {userPosts.map(foundPost => (
                    <div className="post-container" key={foundPost._id}>
                        <h3>Title: {foundPost.title}</h3>
                        <p>Author: {foundPost.username}</p>
                        <p>Content: {foundPost.content}</p>
                        <p>Date Posted: {foundPost.date_posted}</p>
                    </div>
                ))}
            </div>
        </>
    )


}

export default PostView; 