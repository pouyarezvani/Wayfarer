const bcrypt = require('bcrypt'); // passwords secure
const validate = require('../validation/register');
const db = require('../models');

function signup(req, res) {
    const { errors, notValid } = validate(req.body);

    if (notValid) {
        return res.status(400).json({ status: 400, errors });
    }

    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) {
            return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
        }
        if (foundUser) {
            return res.status(400).json({ status: 400, message: 'Email address has already been registered. Please try again.' });
        }
        bcrypt.genSalt(10, (err, salt) => {
            if(err) return res.status(500).json({
                status: 500,
                message: 'Something went wrong. Please try again.'
            });
    
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if(err) return res.status(500).json({
                    status: 500,
                    message: 'Something went wrong. Please try again.'
                });
    
                const newUser = {
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                };
    
                db.User.create(newUser, (err, savedUser) => {
                    if(err) return res.status(500).json({
                        status: 500,
                        message: err
                    });
                    res.status(200).json({ status: 201, message: 'SUCCESS!' });
                });
            });

        })
    });
};

function login(req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ status: 400, })
    }

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
