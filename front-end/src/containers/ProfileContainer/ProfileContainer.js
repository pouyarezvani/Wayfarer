import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'

class ProfileContainer extends Component {
    state = {
        profile: {},
        post: {
            id: 1,
            name: 'San Francisco',
            content: "Fun time in San Francisco",
            imageUrl: "https://i.stack.imgur.com/34AD2.jpg",
            date: new Date().toLocaleDateString,
        },
    };

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/user/${userId}`, { withCredentials: true })
            // console.log(res.data)
            .then(res => this.setState({ profile: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="post-container">
                <Profile user={this.state.profile}/>
            </div>
        );
    };
};


export default ProfileContainer;