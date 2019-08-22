const db = require('../models');

const showUser = (req, res) => {
    db.User.findById(req.params.id, { password: 0, _v: 0 }, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
        res.status(200).json({ status: 200, data: foundUser });
    });
};

const indexUsers = (req, res) => {
    db.User.find({}, { password: 0, _v: 0 }, (err, allUsers) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
        res.status(200).json({ status: 200, data: allUsers });
    });
};

const createUser = (req, res) => {
    db.User.create(req.body, (err, newUser) => {
        if (err) return res.sendStatus(400);
        res.sendStatus(200);
    });
};

module.exports = {
    showUser, 
    indexUsers,
    createUser
};