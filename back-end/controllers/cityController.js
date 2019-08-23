const db = require('../models');

function getTime() {
  return new Date().toLocaleString();
};

const index = (req, res) => {
  db.City.find({}, (err, cities) => {
    if(err) return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again",
      error: err });

    return res.json({ cities });
  });
};

const show = (req, res) => {
  db.City.findById(req.params.city_id, (err, foundCity) => {
    if(err) return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again"
    });
     
    return res.json({ status:200, message: foundCity });
  });
};

const create = (req, res) => {
  const newCity = req.body;
  db.City.create(newCity, (err, createdCity) => {
    if (err) return res.status(400).json({
      status: 400,
      message: "Something went wrong, please try again"
    });
    
    return res.status(201).json({
      status: 201,
      message: createdCity,
      requestedAt: getTime(),
    });
  });
};

const remove = (req, res) => {
  db.City.deleteOne({ _id: req.params.city_id }, (err, city) => {
    if(err) return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again",
      error: err });
    
    return res.json({
      status: 200,
      message: "deleted successfully",
      city});
  });
};

const update = (req, res) => {
  db.City.findByIdAndUpdate(req.params.city_id, req.body, { new: true }, (err, updatedCity) => {
    if(err) return res.status(400).json({
      status: 400,
      message: "something went wrong, please try again"
    });
    res.status(202).json({
      status: 202,
      data: updatedCity,
      requestedAt: getTime()
    });
  });
};

module.exports = {
  index,
  show,
  create,
  remove,
  update
};
