import React from 'react';
// Internal comonents
import CityHeader from './CityHeader/CityHeader';
import Posts from './Posts/Posts';
// Styles
import './CityPosts.css';

const CityPosts = ({ posts, users, name, image }) => {
    return (
        <>
            <CityHeader name={name} image={image} />
            <div className="posts-header">
                <h2>Posts</h2>
                <button className="post-btn"><span>+</span></button>
            </div>
            {posts && <Posts posts={posts} users={users} />}
            {/* {posts ? <Posts posts={posts} users={users} /> : 'Sorry, no posts have been created yet...'} */}

        </>
    );
};

export default CityPosts;