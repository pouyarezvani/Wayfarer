import React from 'react';

const Profile = ({ user: {username, email, date_joined, image_url, current_city} }) => {
    return (
        <>
        <h1>Profile Page</h1>
        <div className="profile">
            <img src={image_url} alt="Profile Image"/>
            <h3><strong>Username: </strong>{username}</h3>
            <h3><strong>Email: </strong>{email}</h3>
            <h3><strong>Current City: </strong>{current_city}</h3>
            <h3><strong>Date Joined: </strong>{date_joined}</h3>
        </div>
        <div className="post">
            {/* {this.props.currentUser.admin || this.state.currentUser.id === this.post.user.id
                        ? <button>x</button>
                        : null} */}
            <img src={this.props.post.imageUrl} alt="profile" />
            <h1>{this.props.post.name}</h1>
            <p>{this.props.post.content}</p>
            <p>Posted By: Eduardo</p>
            <p>Posted On: {this.props.post.date} </p>
        </div>
        </>
    )
}

export default Profile;