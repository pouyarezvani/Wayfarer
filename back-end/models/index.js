const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
});

module.exports = {
    City: require('./City'),
    Post: require('./Post'),
    User: require('./User')
};