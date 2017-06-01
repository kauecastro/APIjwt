var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = () => {
  var app = express();
  app.set('secret','arroz');
  app.use(bodyParser.json());
  consign({cwd: 'app'})
  .include('models')
.then('api')
  .then('controllers/authentication.js')
  .then('controllers')
  .into(app)
  return app;
}
