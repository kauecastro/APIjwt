var app = require('./config/custom-express')();
require('./config/custom-database')('localhost/goiaba');

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
