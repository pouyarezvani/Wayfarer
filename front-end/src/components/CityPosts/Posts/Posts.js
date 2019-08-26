import React from 'react';
import { Link } from 'react-router-dom';
// Internal Components
import Post from './Post/Post';

const Posts = ({ posts, users, image }) => {

    const postLinks = posts.map(post => {
        return (
            <Link key={post._id} to={`/post/${post._id}`} >
                <Post key={post._id} name={post.name} content={post.content} image={image} />
            </Link>
        )
    });

    return (
        <section className="posts-container">
            {postLinks}
        </section>
    );
};

export default Posts;