module.exports = (app) => {
  var api = app.api.products;
  app.get('/getproducts', api.getProducts);
}
