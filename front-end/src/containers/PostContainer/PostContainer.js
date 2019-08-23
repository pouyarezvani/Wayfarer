import React, { Component } from 'react';
<<<<<<< HEAD
import Post from '../../components/CityPosts/Posts/Post/Post';


class PostContainer extends Component {
    



    render() {
        return (
            <Post />
=======
// styles
import './PostContainer.css';


class PostContainer extends Component {
    state = {
        post: {
            id: 1,
            name: 'San Francisco',
            content: "Fun time in San Francisco",
            imageUrl: "https://i.stack.imgur.com/34AD2.jpg",
            date: new Date().toLocaleDateString,
        }

    }

    componentDidMount() {
        // make axios call with url with id of the param
        // url = localhost:3001/api/v1/posts:id
        // set state to the res.data
        // send that as prop to post below
    }

    render() {
        return (
            <div className="post-container">
                <div className="post">
                    <img src={this.state.post.imageUrl} />
                    <h1>{this.state.post.name}</h1>
                    <p>{this.state.post.content}</p>
                    <p>Posted By: Eduardo</p>
                    <p>Posted On: {this.state.post.date} </p>
                </div>

            </div>
>>>>>>> 2c772f9e4956e71175ada067c4494527fbbe5630
        );
    };
};

export default PostContainer;