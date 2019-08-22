const db = require('../models');


module.exports = {
    show: (req, res) => {
        db.User.findOne(req.params.username, { password: 0, _v: 0 }, (err, foundUser) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
            res.status(200).json({ status: 200, data: foundUser });
        });
    },

    index: (req, res) => {
        db.User.find({}, { password: 0, _v: 0 }, (err, allUsers) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' });
            res.status(200).json({ status: 200, data: allUsers });
        });
    },

    delete: (req, res) => {
        db.User.findOneAndDelete(
            { name: req.params.name },
            ( error, deletedUser ) => {
                if (error) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.'});
                res.status(200).json({ status: 200, data: deletedUser });
            },
        );
    },

    // editUser: (req, res) => {
    //     db.User.findOneAndUpdate(req.params.id, { password: 0, __v: 0 }, (err, editedUser) => {
    //         if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.' })
    //     }
    //     )
    // }



}