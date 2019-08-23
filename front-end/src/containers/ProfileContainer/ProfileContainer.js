import React, { Component } from 'react';

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
                <div className="post">
                    {this.props.currentUser.admin || this.state.currentUser.id === this.post.user.id
                        ? <button>x</button>
                        : null}
                    <img src={this.state.post.imageUrl} />
                    <h1>{this.state.post.name}</h1>
                    <p>{this.state.post.content}</p>
                    <p>Posted By: Eduardo</p>
                    <p>Posted On: {this.state.post.date} </p>
                </div>
            </div>
        );
    };
};


export default ProfileContainer;