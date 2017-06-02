module.exports = (app) => {
  var mongoose = require('mongoose');
  var jwt = require('jsonwebtoken');
  var api = {};
  var model = mongoose.model('User');

  api.authentication = (req, res) => {
    model
      .findOne({login: req.body.login, senha: req.body.senha})
      .then((usuario) => {
        if(!usuario) {
          console.log('Login e senha invalido');
          res.sendStatus(401);
        }else {
          var token = jwt.sign({login: usuario.login}, app.get('secret'),
        {expiresIn:60});
        console.log('token criado !');
        res.set('x-access-token', token);
        res.end();
      }
    }, (error) => {
        console.log('Login e senha invalido');
        res.sendSatus(401);
      });
  };

    api.verifyToken = (req, res) => {
      var token = req.headers['x-access-token'];
      if(token) {
        console.log('verificanto token ...');
        jwt.verify(token, app.get('secret'), (err, decoded) => {
          if(err) {
          console.log('Token rejeitado');
          res.sendStatus(401);
        }
        req.usuario = decoded;
        next();
        });
    }
    else {
      console.log('Token não foi enviado !');
      res.sendStatus(401);
    }
  };
  return api;
};
