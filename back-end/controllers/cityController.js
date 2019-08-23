const db = require('../models');

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
  db.City.findById(req.id, (err, city) => {
    if(err) return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again",
      error: err });
     
    return res.json({ status:200, city });
  });
};

const create = (req, res) => {
  db.City.create(req.body.city, (err, city) => {
    if(err) return res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again",
      error: err });
    
    return res.status(201).json({
      status: 201,
      message: 'new city created',
      city });
  });
};

const remove = (req, res) => {
  db.City.deleteOne({ id: req.body.id }, (err, city) => {
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
  db.City.findById(req.body.id, (err, city) => {
    if(err) return res.status(500).json({
      status: 500,
      message: "something went wrong, please try again",
      error: err });
    
    Object.keys(req.body.city).forEach(key => {
      city[key] = req.body.city[key];
    });

    return res.json({
      status: 200,
      message: "",
      city
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

