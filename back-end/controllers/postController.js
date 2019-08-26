const db = require('../models');

function getTime() {
    return new Date().toLocaleString();
};

module.exports = {
    show: (req, res) => {
        db.Post.findById(req.params.post_id, (err, foundPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'
            });
            res.status(200).json({
                status: 200,
                data: foundPost,
                requestedAt: getTime(),
            });
        });
    },
    index: (req, res) => {
        db.Post.find({}, (err, allPosts) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'
            });
            res.status(200).json({
                status: 200,
                numberOfResults: allPosts.length,
                data: allPosts,
                requestedAt: getTime(),
            });
        });
    },
    create: (req, res) => {
        const newPost = req.body;
        db.Post.create(newPost, (err, createdPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'
            });
            res.status(201).json({
                status: 201,
                data: createdPost,
                requestedAt: getTime()
            });

            //finds the user this post belongs to then adds it to 
            // that models posts array and populates
            db.User.findOneAndUpdate({ username: newPost.username }, { new: true }, (error, foundUser) => {
                if (error) return console.log(error);
                foundUser.posts.push(createdPost);
                foundUser.save()
            })
                .populate('posts')
                .exec((error, user) => {
                    if (error) return console.log(error);
                    console.log(user);
                });

            //finds the city this post belongs to then adds it to 
            // that models posts array and populates
            db.City.findOneAndUpdate({ slug: newPost.city_slug }, { new: true }, (error, foundCity) => {
                if (error) return console.log(error);
                foundCity.posts.push(createdPost);
                foundCity.save()
            })
                .populate('posts')
                .exec((error, city) => {
                    if (error) return console.log(error);
                    console.log(city);
                })
        });
    },
    edit: (req, res) => {
        db.Post.findByIdAndUpdate(req.params.post_id, req.body, { new: true }, (err, updatedPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'
            });
            res.status(202).json({
                status: 202,
                data: updatedPost,
                requestedAt: getTime()
            });
        });
    },
    delete: (req, res) => {
        db.Post.findByIdAndDelete(req.params.post_id, (err, deletedPost) => {
            if (err) return res.status(400).json({
                status: 400,
                message: 'Something went wrong, please try again'
            });
            res.status(200).json({
                status: 200,
                message: `Success! You have deleted ${deletedPost}`
            });
        });
    }
};