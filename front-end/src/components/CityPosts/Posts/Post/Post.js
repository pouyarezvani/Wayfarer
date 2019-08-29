import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import '../../CityPosts.css'

const Post = ({ id, title, content, image, currentUser, handleDelete, posts, city_slug }) => {

    return (
        <div className="post-box">
            {currentUser &&
                <div>
                    <i className="fas fa-pen-square"></i>
                    <i onClick={event => {
                        handleDelete(event, id)
                        } } className="fas fa-minus-circle"></i>
                </div>
            }
            <div className="post-box-image">
                <img src={image} alt="city" />
            </div>
            <div className="post-box-content">
                <h4>{title}</h4>
                {content}
            </div>
            <Link key={id} to={`/post/${city_slug}`} >
                <i className="fas fa-expand-arrows-alt"></i>
            </Link>
        </div>
    );
};

export default Post;