import React from 'react';
import './Profile.css';
import axios from 'axios';
import { API_URL } from '../../constants';

const Profile = ({ user: {image_url, username, email, current_city, date_joined, post } }) => {

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