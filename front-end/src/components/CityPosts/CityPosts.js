import React from 'react';
import { Link } from 'react-router-dom';
// Internal comonents
import CityHeader from './CityHeader/CityHeader';
import Posts from './Posts/Posts';
// Styles
import './CityPosts.css';

const CityPosts = ({ slug, description, posts, users, name, image, postImage, handleDelete, handleEdit }) => {
    return (
        <div className="container">
            <CityHeader name={name} image={image} description={description} />
            <div className="posts-header">
                <h2>Posts</h2>
                <Link to={`/city/add_post/${slug}`} className="post-btn">+</Link>
            </div>
            {posts && <Posts
                posts={posts}
                users={users}
                image={postImage}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />}
            {/* {posts ? <Posts posts={posts} users={users} /> : 'Sorry, no posts have been created yet...'} */}

        </div>

    );
};

export default CityPosts;
