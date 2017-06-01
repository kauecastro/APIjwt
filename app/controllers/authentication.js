
module.exports = (app) => {

  var api = app.api.authentication;

  app.post('/authentication', api.authentication);
  //app.use('/*', api.verifyToken);
}
