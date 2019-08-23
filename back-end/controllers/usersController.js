const db = require('../models');

function getTime() {
    return new Date().toLocaleString();
};

module.exports = {
    show: (req, res) => {
        db.User.findById(req.params.user_id, { password: 0, _v: 0 }, (err, foundUser) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
            res.status(200).json({ 
                status: 200, 
                data: foundUser,
                requestedAt: getTime(),
            });
        });
    },

    index: (req, res) => {
        db.User.find({}, { password: 0, _v: 0 }, (err, allUsers) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
            res.status(200).json({ 
                status: 200, 
                data: allUsers,
                requestAt: getTime(),
            });
        });
    },

    delete: (req, res) => {
        db.User.findOneAndDelete(
            { name: req.params.user_id },
            ( error, deletedUser ) => {
                if (error) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.'});
                res.status(200).json({ 
                    status: 200, 
                    data: `Success - deleted ${req.params.user_id}`,
                    requestedAt: getTime(),
                });
            },
        );
    },

    edit: (req, res) => {
        db.User.findOneAndUpdate(req.params.user_id, req.body, { new: true }, { password: 0, _v: 0 }, (err, editedUser) => {
            if (err) return res.status(400).json({ status: 400, message: 'Something went wrong. Please try again.' 
            }),
            res.status(202).json({
                status: 202,
                data: editedUser,
                requestedAt: getTime(),
            });
        });
    }
};