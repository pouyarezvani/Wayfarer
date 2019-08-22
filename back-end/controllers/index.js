module.exports = { // require a folder require a index file, way of making a object of contents of a folder
    auth: require('./authController'),
    user: require('./userController'), 
    city: require('./cityController'),
    post: require('./postController')
};
