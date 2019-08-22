import React from 'react';
// Internal Components
import Post from './Post/Post';

const Posts = ({ posts, users }) => {

    const postLinks = posts.map(post => {
        return (
            <Post key={1} name={post.name} content={post.content} image={post.imageUrl} />
        )
    });

    return (
        <section className="posts-container">
            {postLinks}
        </section>
    );
};

export default Posts;