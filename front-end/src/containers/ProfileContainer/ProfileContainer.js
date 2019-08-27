import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'
import PostView from './PostView';

class ProfileContainer extends Component {
    state = {
        profile: null,
        posts: [],
        postsFiltered: [],
        errors: null
    };

    // Axios Call to find User Information
    getUserInfo = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data }))
            .catch(err => console.log(err));
    };

    handleDelete = event => {
        event.preventDefault()
        this.deletePost();
    }

    submitPost = event => {
        event.preventDefault();
        axios.post(`${API_URL}/posts/`, {
            username: this.state.user.username,
            // city_slug: this.props.slug,
            title: this.state.title,
            content: this.state.content
        }, { withCredentials: true })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    componentDidMount() {
        this.getUserInfo();
        this.getPosts();
    };

    // Axios call to get posts
    getPosts = () => {
        axios.get(`${API_URL}/posts`)
            .then(response => {
                this.setState({ 
                    posts: response.data
            })
            // console.log(this.state.posts)
            this.state.posts.data.map((post) => {
                if (post.username === this.state.profile.data.username) {
                    return this.state.postsFiltered.push(post)
                }
                })
                console.log(this.state.postsFiltered)
                console.log(this.state.posts.data)
        })
        .catch(error => console.log(error));
    };
    

    render() {
        console.log(this.state.postsFiltered)
        console.log(this.state.postsFiltered)

        return (
            <div className="post-container">
                {this.state.errors && this.state.errors.map((error, index) => (
                    <div className="alert" style={{width: '100%'}} role="alert" key={index}>{error.message}
                    <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
                    </div>
                ))}
                {this.state.profile && <Profile user={this.state.profile.data}/>}
                <div className="post-container">
                    {this.state.postsFiltered && this.state.postsFiltered.map((foundPost) => {
                        return (
                        <div className="post-container">
                        <h3>Title: {foundPost.title}</h3>
                        <p>Author: {foundPost.username}</p>
                        <p>Content: {foundPost.content}</p>
                        <p>Date Posted: {foundPost.date_posted}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    };
};


export default ProfileContainer;