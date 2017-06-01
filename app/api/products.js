module.exports = (app) => {
  var mongoose = require('mongoose');
  var api = {};

  api.getProducts = (req, res) => {
    var model = mongoose.model('Product');
    model
    .find({})
    .then((Product) => {
      console.log(Product);
      res.json(Product);
    }, (error) => {
      console.log(error);
      res.status(500).json(error);
    });
  };
  return api;
};
