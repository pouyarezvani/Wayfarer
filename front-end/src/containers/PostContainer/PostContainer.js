import React, { Component } from 'react';
// styles
import './PostContainer.css';
import axios from 'axios';

class PostContainer extends Component {
    state = {};

    componentDidMount() {
        axios.get(`http://localhost:3001/api/v1/posts/${this.props.id}`)
        .then((response) => {
            this.setState({ post: response.data.data })
        })
        .catch((error) => {
            console.log(error)
        });
        
        axios.get(`http://localhost:3001/api/v1/users/${this.props.currentUser}`)
        .then((response) => {
            this.setState({ currentUsername: response.data.data.username })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    handleDeletePost = () => {
        axios.delete(`http://localhost:3001/api/v1/posts/${this.props.id}`);
    };

    render() {
        return (
            <div className="post-container">
                {this.state.post && <div className="post">
                    {this.state.currentUsername === this.state.post.username
                    ? <button onClick={this.handleDeletePost}>delete this post</button>
                    : null}
                    <img width="512px" src={this.state.post.city_slug} alt={`${this.state.post.title}`} />
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.content}</p>
                    <p>Posted By: {this.state.post.username}</p>
                    <p>Date posted: {this.state.post.date_posted}</p>
                </div>}
            </div>
        );
    };
};

export default PostContainer;
