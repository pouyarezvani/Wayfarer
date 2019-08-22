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
    slug: {
        type: String,
        required: true
    }
});

const City = mongoose.model('City', CitySchema);

module.exports = City;