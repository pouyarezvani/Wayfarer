import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import CityPosts from '../../components/CityPosts/CityPosts';
import './ProfileContainer.css'

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

    // deletePost = (event) => {
    //     event.preventDefault();
    //     console.log(this);
    //     axios.delete(`${API_URL}/posts/${this.props.deletePost}`)
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error.response));
    // }

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
                    this.state.postsFiltered.push(post)
                }
                })
                console.log(this.state.postsFiltered)
                console.log(this.state.posts.data)
        })
        .catch(error => console.log(error));
    };
    

    render() {
        return (
            <div className="post-container">
                {this.state.errors && this.state.errors.map((error, index) => (
                    <div className="alert" style={{width: '100%'}} role="alert" key={index}>{error.message}
                    <button type="button" className="close" data-dismiss="alert"><span>&times;</span></button>
                    </div>
                ))}
                {this.state.profile && <Profile user={this.state.profile.data}/>}
                <div className="post-container">
                    <h2>Your Posts</h2>
                    {this.state.posts.data && this.state.posts.data.map(foundPost => (
                    <div className="post" key={foundPost}><h4>{foundPost.title} </h4>
                    <p>{foundPost.content}</p>
                    <p> Author: {foundPost.username}</p>
                    </div>
                    ))}
                </div>
            </div>
        );
    };
};


export default ProfileContainer;