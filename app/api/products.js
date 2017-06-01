module.exports = (app) => {
  var mongoose = require('mongoose');
  var api = {};

  api.getProducts = (req, res) => {
    var model = mongoose.model('Product');
    console.log(model);
    model
    .find({})
    .then((products) => {
      console.log(products);
      res.json(products);
    }, (error) => {
      console.log(error);
      res.status(500).json(error);
    });
  };
  return api;
};
