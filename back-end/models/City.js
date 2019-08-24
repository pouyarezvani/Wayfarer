const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    slug: {
        type: String
    },

});

const City = mongoose.model('City', CitySchema);

module.exports = City;