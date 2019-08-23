const bcrypt = require('bcryptjs'); // passwords secure
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
            if (err) return res.status(500).json({
                status: 500,
                message: 'Something went wrong. Please try again.'
            });

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(500).json({
                    status: 500,
                    message: 'Something went wrong. Please try again.'
                });

                const newUser = {
                    username: req.body.username,
                    email: req.body.email,
                    password: hash
                };

                db.User.create(newUser, (err, savedUser) => {
                    if (err) return res.status(500).json({
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
        return res.status(400).json({ status: 400, message: 'Please enter your email and password' });
    }

    db.User.findOne({ email: req.username }, (err, foundUser) => {
        if (err) return res.status(500).json({
            message: "Something went wrong. Please try again",
            error: err
        });

        if (!foundUser) return res.status(400).json({
            message: "Email or password is incorrect"
        });

        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({
                status: 500,
                message: "Something went wrong. Please try again"
            });

            if (isMatch) {
                req.session.loggedIn = true;
                req.session.currentUser = { id: foundUser._id };;
                return res.status(200).json({ status: 200, message: 'Success', id: foundUser._id });
            } else {
                return res.status(400).json({
                    status: 400,
                    message: "Email or password is incorrect"
                });
            }
        });
    });
};

const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
        res.sendStatus(200);
    });
};

const verify = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({ status: 401, message: 'Unauthorized. Please try again.' });
    res.status(200).json({ status: 200, message: 'Current User Verified.' });
}


module.exports = {
    signup,
    login,
    logout,
    verify
};
