import React from 'react';
// Styles
import '../../CityPosts.css'

const Post = ({ name, content, image }) => {
    return (
        <div className="post-box">
            <div className="post-box-image">
                <img src={image} alt="city" />
            </div>
            <div className="post-box-content">
                <h4>{name}</h4>
                {content}
            </div>
        </div>
    );
};

export default Post;