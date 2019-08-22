import React from 'react';
// Styles
import '../../CityPosts.css'

const Post = ({ name, title }) => {
    return (
        <div className="post-box">
            <div className="post-box-image">
                <img src="#" alt="city"/>
            </div>
            <div className="post-box-content">
                <h4>{title}</h4>
                {name}
            </div>
        </div>
    );
};

export default Post;