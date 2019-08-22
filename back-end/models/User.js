const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true, 
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    date_joined: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    }, 
    admin: {
        type: Boolean
    }, 
    image_url: {
        type: String,
        default: "https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
    }, 
    slug: {
        type: String
    }, 
    current_city: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;