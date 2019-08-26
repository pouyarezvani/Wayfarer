import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../../CityPosts.css'

const Post = ({ id, name, content, image, handleDelete, handleEdit }) => {
    return (
        <div className="post-box">
            <div>
                <i className="fas fa-pen-square"></i>
                <Link to={`/delete_post/${id}`}>
                    <i className="fas fa-minus-circle"></i>
                </Link>
            </div>
            <div className="post-box-image">
                <img src={image} alt="city" />
            </div>
            <div className="post-box-content">
                <h4>{name}</h4>
                {content}
            </div>
            <Link key={id} to={`/post/${id}`} >
                <i className="fas fa-expand-arrows-alt"></i>
            </Link>
        </div>
    );
};

export default Post;