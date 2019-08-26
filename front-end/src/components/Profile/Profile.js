import React from 'react';
import './Profile.css';


const Profile = ({ user: { image_url, username, current_city, email, date_joined, posts } }) => {
    return (
        <div className="profile-page">
        <h1 className="profile-heading">Profile Page</h1>
        <div className="profile-container">
            <img src={image_url} alt="Profile Avatar"/>
            <h3><strong>Username: </strong>{username}</h3>
            <h3><strong>Email: </strong>{email}</h3>
            <h3><strong>Current City: </strong>{current_city}</h3>
            <h3><strong>Date Joined: </strong>{date_joined}</h3>
        </div>
       {/* <div className="post">
            {this.props.currentUser.admin || this.state.currentUser.id === this.post.user.id
                        ? <button>x</button>
                        : null}
            <img src={imageUrl} alt="profile" />
            <h1>{this.props.post.name}</h1>
            <p>{this.props.post.content}</p>
            <p>Posted By: Eduardo</p>
            <p>Posted On: {this.props.post.date} </p>
        </div> */}
        </div>
    )
        };

export default Profile;