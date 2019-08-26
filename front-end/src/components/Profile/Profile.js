import React from 'react';

const Profile = () => {
    return (
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
    )
}

export default Profile;