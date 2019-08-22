const bcrypt = require('bcrypt'); // passwords secure

const db = require('../models');

function signup(req, res) {
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return res.status(500).json({
            message: 'bcrypt ran into a problem while generating a salt',
            error: err
        });

        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) return res.status(500).json({
                message: 'bcrypt ran into a problem while generating a hash',
                error: err
            });

            const newUser = {
                username: req.body.username,
                password: hash
            };

            db.User.create(newUser, (err, user) => {
                if(err) return res.status(500).json({
                    message: 'mongoose ran into a problem while creating a new user',
                    error: err
                });

                user = { _id: user._id, username: user.username };
                return res.json({ user });
            });
        });
    });
}

function login(req, res) {
    db.User.findOne(req.username, (err, user) => {
        if(err) return res.status(500).json({
            message: "mongoose ran into a problem while searching for a user",
            error: err
        });

        if(!user) return res.status(401).json({
            message: "invalid credentials"
        });

        bcrypt.compare(req.body.password, user.password, (err, same) => {
            if(err) return res.status(500).json({
                message: "bcrypt ran into a problem while comparing passwords",
                error: err
            });

            if(same) {
                user = { _id: user._id, username: user.username };
                req.session.authenticated = true;
                req.session.user = user;
                return res.json({ user });
            } else {
                return res.status(401).json({
                    message: "invalid credentials"
                });
            }
        });
    })
}

module.exports = {
    signup,
    login
};
