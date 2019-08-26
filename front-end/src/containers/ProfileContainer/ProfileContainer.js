import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../'

import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'

class ProfileContainer extends Component {
    state = {
        post: {
            id: 1,
            name: 'San Francisco',
            content: "Fun time in San Francisco",
            imageUrl: "https://i.stack.imgur.com/34AD2.jpg",
            date: new Date().toLocaleDateString,
        },
    };

    render() {
        return (
            <div className="post-container">
                <Profile />
            </div>
        );
    };
};


export default ProfileContainer;