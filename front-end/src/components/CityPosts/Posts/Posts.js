import React from 'react';

// Internal Components
import Post from './Post/Post';

const Posts = ({ posts, users, image, handleDelete, handleEdit }) => {

    const postLinks = posts.map(post => {
        return (

            <Post
                key={post._id}
                id={post._id}
                name={post.name}
                content={post.content}
                image={image}
                handleDelete={handleDelete}
                handleEdit={handleEdit} />

        )
    });

    return (
        <section className="posts-container">
            {postLinks}
        </section>
    );
};

export default Posts;