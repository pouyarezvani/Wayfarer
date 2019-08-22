db = require('../models');

const show = (req, res) => {
    db.City.findById(req.params.id, 
}


module.exports = {
    show,
    index
}