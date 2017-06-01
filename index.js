var app = require('./config/custom-express')();
require('./config/custom-database')('localhost/ExamAPI');

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
