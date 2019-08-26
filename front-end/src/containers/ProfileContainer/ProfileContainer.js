import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'

class ProfileContainer extends Component {
    state = {
        profile: null,
        defaultPost: {
            id: 1,
            name: 'San Francisco',
            content: "Fun time in San Francisco",
            imageUrl: "https://i.stack.imgur.com/34AD2.jpg",
            date: new Date().toLocaleDateString,
        }, 
        users: [],
        cities: [],
        posts: [],
        // cityAsProp: {},
        newPost: {
            title: '',
            content: ''
        }
    };

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="post-container">
                {this.state.profile && <Profile user={this.state.profile.data}/>}
            </div>
        );
    };
};


export default ProfileContainer;