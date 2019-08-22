const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    title:{
        type: String, 
        required: true,
        maxlength: 200,
        minlength: 1
    },
    content: {
        type: String,
        maxlength: 500,
        required: true
    }, 
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ], 
    date_commented: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
