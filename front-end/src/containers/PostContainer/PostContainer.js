import React, { Component } from 'react';
// styles
import './PostContainer.css';
import axios from 'axios';

class PostContainer extends Component {
    async componentDidMount() {
        axios.get(`http://localhost:3001/api/v1/posts/${this.props.id}`)
        .then((response) => {
            this.setState({ post: response.data.data })
        })
        .catch((error) => {
            console.log(error)
        }); 
    }

    render() {
        return (
            <div className="post-container">
                {this.state && <div className="post">
                    <img width="512px" src={this.state.post.city_slug} alt={`${this.state.post.title}`} />
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.content}</p>
                    <p>Posted By: {this.state.post.username}</p>
                </div>}
            </div>
        );
    };
};

export default PostContainer;
