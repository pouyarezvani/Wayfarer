import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'
import PostContainer from '../PostContainer/PostContainer';
import Posts from '../../components/CityPosts/Posts/Posts';

class ProfileContainer extends Component {
    state = {
        profile: null,
        users: [],
        cities: [],
        posts: [],
        newPost: {
            title: '',
            content: ''
        }
    };

    getCurrentUserPosts = (userid) => {
        axios.get(`${API_URL}/posts`)
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.getCurrentUserPosts();
        console.log(this.state.cities);
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data }))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="post-container">
                {this.state.profile && <Profile user={this.state.profile.data} />}
                {/* {this.state.cities && <Posts user={this.state.profile.data} />} */}
            </div>
        );
    };
};


export default ProfileContainer;