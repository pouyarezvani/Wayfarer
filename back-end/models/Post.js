const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const PostSchema = new Schema({
    title: {
        type: String,
        requried: true,
        maxlength: 200,
        minlength: 1
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    content: {
        type: String,
        required: true, 
        maxlength: 1000
    },
    city: [
        {
            type: Schema.Types.ObjectId,
            ref: 'City'
        }
    ],
    date_posted: {
        type: Date,
        default: Date.now
    }, 
    comments: [Comment.schema]
});

module.exports = mongoose.model('Post', PostSchema);
