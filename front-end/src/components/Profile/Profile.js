import React from 'react';
import './Profile.css';

const Profile = ({ user: {image_url, username, email, current_city, date_joined } }) => {

    return (
        <div className="profile-page">
            <h1 className="profile-heading">Profile Page</h1>
            <div className="profile-container">
                <img src={image_url} alt="Profile Avatar"/>
                <h3><strong>Username: </strong>{username}</h3>
                <h3><strong>Email: </strong>{email}</h3>
                <h3><strong>Current City: </strong>{current_city}</h3>
                <h3><strong>Date Joined: </strong>{date_joined}</h3>
            </div>
        </div>
    )
};

export default Profile;