module.exports = (uri) => {
  var mongoose = require('mongoose');
console.log(uri);
  mongoose.connect('mongodb://' + uri);
  mongoose.connection.on('connected', () => {
    console.log('Connected on the database !');
  });
  mongoose.connection.on('error', (error) => {
    console.log('Erro na conexão: ' + error);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Desconectando do MongoDB');
  });
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Conexão fechada pelo termino da aplicação.');
      process.exit(0);
    });
  });
}
