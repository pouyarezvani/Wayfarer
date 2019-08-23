import React from 'react';
import { Link } from 'react-router-dom';
// Internal Components
import Post from './Post/Post';

const Posts = ({ posts, users }) => {

    const postLinks = posts.map(post => {
        return (
            <Link key={post.id} to={`/post/${post.id}`} >
                <Post key={post.id} name={post.name} content={post.content} image={post.imageUrl} />
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