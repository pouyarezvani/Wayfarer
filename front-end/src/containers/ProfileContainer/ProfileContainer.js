import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Profile from '../../components/Profile/Profile';
import CityPosts from '../../components/CityPosts/CityPosts';
import './ProfileContainer.css'

class ProfileContainer extends Component {
    state = {
        profile: null,
        defaultPost: {
            id: 1,
            name: 'Thoughts on San Francisco',
            content: "Fun time in San Francisco",
            imageUrl: "https://i.stack.imgur.com/34AD2.jpg",
            date: new Date().toLocaleDateString,
        }, 
        users: [],
        posts: [],
        postsFiltered: [],
        newPost: {
            title: '',
            content: ''
        }, 
        postAsProp: {},
        errors: null
    };

    // Axios Call to find User Information
    getUserInfo = () => {
        const userId = localStorage.getItem('uid');
        axios.get(`${API_URL}/users/${userId}`, { withCredentials: true })
            .then(res => this.setState({ profile: res.data }))
            .catch(err => console.log(err));
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleEdit = event => {
        event.preventDefault()
        console.log('click');
        // editPost();
    }
    handleDelete = event => {
        event.preventDefault()
        this.deletePost();
    }

    submitPost = event => {
        event.preventDefault();
        axios.post(`${API_URL}/posts/`, {
            username: this.state.user.username,
            city_slug: this.props.slug,
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
        let currentUser = this.props.currentUser;
        axios.get(`${API_URL}/posts`)
        .then(response => {
            this.setState({ 
                posts: response.data,
                // postsFiltered: response.data.posts.filter(post => post.username === this.state.profile.data.username)
            })
            console.log(this.state.posts)

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
                    <div className="post" key={foundPost}>{foundPost.title} 
                    {/* <button type="button" value={foundPost.id} onClick={this.deletePost} className="close" data-dismiss="alert"><span>&times;</span></button> */}
                    </div>
                    ))}
                </div>
            </div>
        );
    };
};


export default ProfileContainer;